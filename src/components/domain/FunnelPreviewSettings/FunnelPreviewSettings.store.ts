import { makeAutoObservable } from 'mobx'

import { DEVICES } from '../FunnelPreview/FunnelPreview.constants'
import { DeviceTheme, DeviceType } from '../FunnelPreview/FunnelPreview.types'
import { DEVICE_SCALE_RANGE } from './FunnelPreviewSettings.constants'

export class FunnelPreviewSettingsStore {
  // ====================================================
  // State
  // ====================================================
  /**
   * The device shell to render the Funnel in
   */
  device: DeviceType = 'Android'

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
    const scale = window.innerHeight / minViewportHeightForFullScale
    this.setDeviceScale(Math.max(scale, DEVICE_SCALE_RANGE[0]))
  }

  toggleIsDeviceVisible = () => {
    this.isDeviceVisible = !this.isDeviceVisible
  }

  toggleDarkTheme = () => {
    this.deviceTheme = this.deviceTheme === 'dark' ? 'light' : 'dark'
  }
}
