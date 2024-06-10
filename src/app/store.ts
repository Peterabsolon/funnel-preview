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
  funnelOpened: FunnelPreviewStore | undefined = undefined

  parsingError?: parsingError = undefined
  isLandingModalOpened = false

  constructor() {
    makeAutoObservable(this)
  }

  // ====================================================
  // Computed
  // ====================================================
  get parsingErrorMessage() {
    return this.parsingError ? PARSING_ERROR_MESSAGES[this.parsingError] : undefined
  }

  get hasManyFunnels() {
    return this.funnels.length > 1
  }

  // ====================================================
  // Private
  // ====================================================
  /**
   * Parses funnel data and initializes its store.
   */
  private createFunnel = (data: AnyObject) => {
    this.funnels.every((funnel) => funnel.settings.closePanel())

    try {
      const funnelData = FunnelSchema.parse(data)
      const funnel = new FunnelPreviewStore(funnelData)
      this.funnels.push(funnel)
      this.funnelOpened = funnel
    } catch (err) {
      console.error('Failed to parse funnel data', err)
      this.parsingError = 'schema'
    }
  }

  // ====================================================
  // Handlers
  // ====================================================
  /**
   * Loads and parses the JSON file.
   * Dropzone component already ensures we get .json files only.
   */
  handleLoadFiles = async (files: File[]) => {
    if (!this.isLandingModalOpened) {
      this.handleReset()
    }

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

    this.isLandingModalOpened = false
  }

  /**
   * Loads the demo funnel file.
   */
  handleUseDemoFile = () => {
    this.createFunnel(funnelDemo)
    this.isLandingModalOpened = false
  }

  /**
   * Opens the add new funnel modal.
   */
  handleAddNewFunnel = () => {
    this.isLandingModalOpened = true
  }

  /**
   * Closes the add new funnel modal.
   */
  handleAbortAddNewFunnel = () => {
    this.isLandingModalOpened = false
  }

  /**
   * Opens the funnel settings.
   */
  handleFunnelClick = (funnel: FunnelPreviewStore) => {
    this.funnelOpened = funnel
  }

  /**
   * Resets all the state.
   */
  handleReset = () => {
    this.funnels.clear()
    this.parsingError = undefined
  }
}

export const app = new AppStore()
