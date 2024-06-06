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
   * The funnel data to preview
   */
  data: Funnel | undefined = undefined

  /**
   * The device shell to render the funnel in
   */
  deviceType: FunnelPreviewDeviceType = 'iPhone'

  /**
   * The color theme to render the device UI in
   */
  deviceTheme: FunnelPreviewDeviceTheme = 'dark'

  /**
   * Which funnel page is being viewed
   */
  page = 0

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
}
