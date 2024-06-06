'use client'

import { makeAutoObservable, observable } from 'mobx'

import demoFunnelJson from '../demo.funnel.json'

import { FunnelStore } from '~/components'
import { Funnel } from '~/types'

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  funnels = observable<FunnelStore>([])

  constructor() {
    makeAutoObservable(this)
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
        const store = new FunnelStore(data)
        this.funnels.push(store)
      } catch (err) {
        // TODO: Notification
        console.warn('Failed to parse file')
        continue
      }
    }
  }

  useDemoFile = () => {
    const funnel = new FunnelStore(demoFunnelJson as Funnel)
    this.funnels.push(funnel)
  }
}

export const app = new AppStore()
