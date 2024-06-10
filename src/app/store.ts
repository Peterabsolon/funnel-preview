'use client'

import { makeAutoObservable, observable } from 'mobx'

import { FunnelPreviewStore } from '~/components'
import { FunnelSchema } from '~/types'

import funnelDemo from '../../fixtures/demo.funnel.json'

const PARSING_ERROR = ['file', 'schema'] as const
type parsingError = (typeof PARSING_ERROR)[number]

const PARSING_ERROR_MESSAGES: { [key in parsingError]: string } = {
  file: 'Failed to parse file as JSON.',
  schema: 'The provided JSON file has invalid data shape.',
}

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  funnels = observable<FunnelPreviewStore>([])
  parsingError?: parsingError = undefined
  focusedFunnelIndex = 0

  constructor() {
    makeAutoObservable(this)
  }

  // ====================================================
  // Computed
  // ====================================================
  get funnelWithSettingsOpened() {
    return this.funnels.find((f) => f.settings.isPanelOpened)
  }

  get parsingErrorMessage() {
    return this.parsingError ? PARSING_ERROR_MESSAGES[this.parsingError] : undefined
  }

  /**
   * Parses funnel data and initializes its store.
   */
  private createFunnel = (data: AnyObject) => {
    try {
      const funnel = FunnelSchema.parse(data)
      this.funnels.push(new FunnelPreviewStore(funnel))
    } catch (err) {
      console.error('Failed to parse funnel data', err)
      this.parsingError = 'schema'
    }
  }

  /**
   * Loads and parses the JSON file.
   * Dropzone component already ensures we get .json files only.
   */
  loadFiles = async (files: File[]) => {
    this.reset()

    for (const file of files) {
      const text = await file.text()

      try {
        const data = JSON.parse(text)
        this.createFunnel(data as AnyObject)
      } catch (err) {
        console.error('Failed to parse JSON file', err)
        this.parsingError = 'file'
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
    this.parsingError = undefined
  }
}

export const app = new AppStore()
