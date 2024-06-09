'use client'

import { makeAutoObservable, observable } from 'mobx'

import { FunnelStore } from '~/components'
import { FunnelSchema } from '~/types'

import funnelDemo from '../../fixtures/demo.funnel.json'

// export type AppTheme = 'light' | 'dark'

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  funnels = observable<FunnelStore>([])
  // theme: AppTheme = 'dark'

  constructor() {
    makeAutoObservable(this)
  }

  /**
   * Parses funnel data and initializes its store
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createFunnel = (data: any) => {
    try {
      const funnel = FunnelSchema.parse(data)
      this.funnels.push(new FunnelStore(funnel))
    } catch (err) {
      // TODO: Notifications
      console.error('Failed to parse data', err)
      alert('Failed to parse data. Check the console for more details')
    }
  }

  /**
   * Loads and parses the JSON files.
   * Dropzone component already ensures we get .json files only.
   */
  loadFiles = async (files: File[]) => {
    for (const file of files) {
      const text = await file.text()

      try {
        // TODO: Use Zod
        const data = JSON.parse(text)
        this.createFunnel(data)
      } catch (err) {
        // TODO: Notification
        console.warn('Failed to parse file')
        continue
      }
    }
  }

  /**
   * Loads the demo funnel file.
   */
  useDemoFile = () => {
    this.createFunnel(funnelDemo)
  }

  /**
   * Resets all the state.
   */
  reset = () => {
    this.funnels.clear()
  }
}

export const app = new AppStore()
