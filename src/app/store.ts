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
  // error?: ParseError = undefined
  // theme: AppTheme = 'dark'

  constructor() {
    makeAutoObservable(this)
  }

  /**
   * Parses funnel data and initializes its store.
   */
  private createFunnel = (data: AnyObject) => {
    try {
      const funnel = FunnelSchema.parse(data)
      this.funnels.push(new FunnelStore(funnel))
    } catch (err) {
      // TODO: Notifications
      console.error('Failed to parse funnel data', err)
      alert('Failed to parse funnel data. Check the console for more details')
    }
  }

  /**
   * Loads and parses the JSON files.
   * Dropzone component already ensures we get .json files only.
   */
  loadFiles = async (files: File[]) => {
    for (const file of files) {
      console.log('file.text', file.text)

      const text = await file.text()

      try {
        const data = JSON.parse(text)
        this.createFunnel(data as AnyObject)
      } catch (err) {
        console.error('Failed to parse JSON file', err)
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
