import { makeAutoObservable } from 'mobx'

import { DEVICES } from '../FunnelPreview/FunnelPreview.constants'
import { DeviceTheme, DeviceType } from '../FunnelPreview/FunnelPreview.types'
import { DEVICE_SCALE_RANGE } from './FunnelPreviewSettings.constants'

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
   * Is the device frame visible?
   */
  isDeviceVisible = true

  constructor() {
    makeAutoObservable(this)
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

  setDeviceScaleBasedOnViewport = () => {
    const { minViewportHeightForFullScale } = DEVICES[this.device]
    const scale = (window.innerHeight / minViewportHeightForFullScale) * 0.95
    this.setDeviceScale(Math.max(scale, DEVICE_SCALE_RANGE[0]))
  }

  toggleIsDeviceVisible = () => {
    this.isDeviceVisible = !this.isDeviceVisible
    this.setDeviceScale(1)
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
