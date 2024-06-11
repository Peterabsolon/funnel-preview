import { makeAutoObservable } from 'mobx'
import { v4 as uuid } from 'uuid'

import type { AppStore } from '~/app/store'
import { Funnel } from '~/types'

import { FunnelPreviewSettingsStore } from '../FunnelPreviewSettings'

export class FunnelPreviewStore {
  // ====================================================
  // State
  // ====================================================
  /**
   * ID to use for React render key
   */
  id: string

  /**
   * The Funnel data to preview
   */
  data: Funnel | undefined = undefined

  /**
   * The device shell to render the Funnel in
   */
  settings: FunnelPreviewSettingsStore

  /**
   * Which Funnel page is being viewed
   */
  page = 0

  // ====================================================
  // Constructor
  // ====================================================
  constructor(
    private readonly app: AppStore,
    data?: Funnel,
  ) {
    makeAutoObservable(this)

    this.id = uuid()
    this.data = data
    this.settings = new FunnelPreviewSettingsStore(app)
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
