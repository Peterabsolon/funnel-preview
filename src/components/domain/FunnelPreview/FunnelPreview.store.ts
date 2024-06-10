import { makeAutoObservable } from 'mobx'
import { v4 as uuid } from 'uuid'

import { Funnel } from '~/types'

import { DeviceTheme, DeviceType } from './FunnelPreview.types'

export class FunnelStore {
  // ====================================================
  // State
  // ====================================================
  /**
   * ID to use for React render key
   */
  id = uuid()

  /**
   * The Funnel data to preview
   */
  data: Funnel | undefined = undefined

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
   * Which Funnel page is being viewed
   */
  page = 0

  // ====================================================
  // Constructor
  // ====================================================
  constructor(data?: Funnel) {
    makeAutoObservable(this)
    this.data = data
  }

  // ====================================================
  // Actions
  // ====================================================
  setData = (data: Funnel) => {
    this.data = data
  }

  setPage = (page: number) => {
    this.page = page
  }

  setDevice = (device: DeviceType) => {
    this.device = device
  }

  setDeviceScale = (scale: number) => {
    this.deviceScale = scale
  }

  toggleDarkTheme = () => {
    this.deviceTheme = this.deviceTheme === 'dark' ? 'light' : 'dark'
  }
}
