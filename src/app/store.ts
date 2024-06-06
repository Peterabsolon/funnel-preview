'use client'

import { makeAutoObservable, observable } from 'mobx'

import funnelDemo from '../demo.funnel.json'

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

  createFunnel = (funnel: Funnel) => {
    this.funnels.push(new FunnelStore(funnel))
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
   * Loads the demo funnel file
   */
  useDemoFile = () => {
    this.createFunnel(funnelDemo as Funnel)
  }

  /**
   * Resets all state
   */
  reset = () => {
    this.funnels.clear()
  }
}

export const app = new AppStore()
