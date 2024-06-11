import debounce from 'lodash.debounce'
import { makeAutoObservable, reaction } from 'mobx'
import { createRef } from 'react'

import type { AppStore } from '~/app/store'

import { DEVICE_SCALE_RANGE, DEVICES } from '../FunnelPreview/FunnelPreview.constants'
import { DeviceTheme, DeviceType } from '../FunnelPreview/FunnelPreview.types'

export class FunnelPreviewSettingsStore {
  // ====================================================
  // State
  // ====================================================
  /**
   * Is the settings panel opened?
   */
  isPanelOpened = true

  /**
   * The device shell to render the Funnel in
   */
  device: DeviceType = 'iPhone14Pro'

  /**
   * The color theme to render the device UI in
   */
  deviceTheme: DeviceTheme = 'dark'

  /**
   * The scale to render the device model in
   */
  deviceScale = 1

  /**
   * Reference to device root div element
   */
  deviceRef = createRef<HTMLDivElement>()

  /**
   * The actual render width of the preview device after scaling
   */
  renderedDeviceWidth?: number = undefined

  /**
   * Is the device frame visible?
   */
  isDeviceVisible = true

  constructor(private readonly app: AppStore) {
    makeAutoObservable(this)

    this.setRenderedDeviceWidth = debounce(this.setRenderedDeviceWidth, 250)

    reaction(
      () => this.deviceScale,
      () => this.setRenderedDeviceWidth(),
    )
  }

  // ====================================================
  // Actions
  // ====================================================
  setDevice = (device: DeviceType) => {
    this.device = device
  }

  setDeviceScale = (scale: number) => {
    this.deviceScale = scale
  }

  setRenderedDeviceWidth = () => {
    console.log('yo')
    const element = this.deviceRef.current
    if (!element) return
    this.renderedDeviceWidth = element.getBoundingClientRect().width
    console.log('this.renderedDeviceWidth', this.renderedDeviceWidth)
  }

  setDeviceScaleBasedOnViewport = () => {
    const { minViewportHeightForFullScale } = DEVICES[this.device]

    // figure out how tall is viewport relative to height at which the device can be rendered at full scale
    const viewportHeightRatio = window.innerHeight / minViewportHeightForFullScale

    // account for funnel preview title that is only rendered with multiple funnels present
    const scaleAdjustment = this.app.hasManyFunnels ? 0.85 : 0.95
    const scaleAdjusted = viewportHeightRatio * scaleAdjustment

    // do not scale below the minimum
    const scaleFinal = Math.max(scaleAdjusted, DEVICE_SCALE_RANGE[0])

    this.setDeviceScale(scaleFinal)
  }

  toggleIsDeviceVisible = () => {
    this.isDeviceVisible = !this.isDeviceVisible
    this.setDeviceScaleBasedOnViewport()
  }

  toggleDarkTheme = () => {
    this.deviceTheme = this.deviceTheme === 'dark' ? 'light' : 'dark'
  }

  openPanel = () => {
    this.isPanelOpened = true
  }

  closePanel = () => {
    this.isPanelOpened = false
  }
}
