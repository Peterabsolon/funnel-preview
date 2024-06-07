import { makeAutoObservable } from 'mobx'
import { v4 as uuid } from 'uuid'

import { Funnel } from '~/types'

import { FunnelPreviewDeviceTheme, FunnelPreviewDeviceType } from './Funnel.types'

export class FunnelStore {
  // ====================================================
  // Model
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
  device: FunnelPreviewDeviceType = 'iPhone'

  /**
   * The color theme to render the device UI in
   */
  deviceTheme: FunnelPreviewDeviceTheme = 'dark'

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
  setData = (data: Funnel) => (this.data = data)
  setPage = (page: number) => (this.page = page)
  setDevice = (device: FunnelPreviewDeviceType) => (this.device = device)
}
