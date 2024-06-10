import { makeAutoObservable } from 'mobx'
import { v4 as uuid } from 'uuid'

import { Funnel } from '~/types'

import { FunnelPreviewSettingsStore } from '../FunnelPreviewSettings'

export class FunnelPreviewStore {
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
  settings = new FunnelPreviewSettingsStore()

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
  // Computed
  // ====================================================
  get pagesCount() {
    return this.data?.pages.length ?? 0
  }

  get pageContent() {
    return this.data ? this.data.pages[this.page] : undefined
  }

  get bgColor() {
    return this.data?.bgColor ?? 'bg-slate-800'
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
