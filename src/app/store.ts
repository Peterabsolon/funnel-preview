'use client'

import { makeAutoObservable, observable, when } from 'mobx'

import { FunnelPreviewStore } from '~/components'
import { Funnel, FunnelSchema } from '~/types'

import funnelDemo from '../../fixtures/demo.funnel.json'
import { PARSING_ERROR_MESSAGES, ParsingError } from './store.constants'

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  funnels = observable<FunnelPreviewStore>([])
  funnelOpened: FunnelPreviewStore | undefined = undefined

  parsingError?: ParsingError = undefined
  isLandingModalOpened = false

  constructor() {
    makeAutoObservable(this)

    /** Account for funnel title being visible with 2+ more devices */
    when(
      () => this.funnels.length === 2,
      () => this.funnels.forEach((funnel) => funnel.settings.setDeviceScaleBasedOnViewport()),
    )
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
   * Parses file into JSON.
   */
  private parseFile = async (file: File): Promise<Funnel> => {
    const text = await file.text()

    let data: AnyObject = {}
    try {
      data = JSON.parse(text)
    } catch (err) {
      console.error('Failed to parse JSON file', err)
      this.parsingError = 'file'
      throw err
    }

    let funnelData: Funnel
    try {
      funnelData = FunnelSchema.parse(data)
    } catch (err) {
      console.error('Failed to parse funnel data', err)
      this.parsingError = 'schema'
      throw err
    }

    return funnelData
  }

  /**
   * Creates funnel preview store.
   */
  private createFunnel = (funnel: Funnel) => {
    try {
      const store = new FunnelPreviewStore(this, funnel)
      this.funnels.push(store)
      this.funnelOpened = store
    } catch (err) {
      console.error('Failed to parse funnel data', err)
      this.parsingError = 'schema'
    }
  }

  // ====================================================
  // Handlers
  // ====================================================
  /**
   * Parses the JSON file and initializes the funnel preview store.
   * Dropzone component already ensures we get .json files only.
   */
  handleLoadFile = async (file: File) => {
    const data = await this.parseFile(file)
    this.createFunnel(data)
  }

  /**
   * Parses and loads funnel JSON files
   */
  handleLoadFiles = async (files: File[]) => {
    for (const file of files) {
      await this.handleLoadFile(file)
    }
  }

  handleLoadMoreFiles = async (files: File[]) => {
    for (const file of files) {
      await this.handleLoadFile(file)
    }
  }

  handleDropFiles = async (files: File[]) => {
    if (!this.funnels.length) {
      await this.handleLoadFiles(files)
    } else {
      await this.handleLoadMoreFiles(files)
    }

    this.isLandingModalOpened = false
  }

  handleReplaceOpenedFunnelFile = async (files: File[]) => {
    if (!this.funnelOpened || !files[0]) return
    const data = await this.parseFile(files[0])
    this.funnelOpened.setData(data)
  }

  /**
   * Loads the demo funnel file.
   */
  handleUseDemoFile = async () => {
    this.createFunnel(FunnelSchema.parse(funnelDemo))
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
   * Opens/closes the funnel settings.
   */
  handleToggleFunnelSettings = (funnel: FunnelPreviewStore) => {
    // Only enable closing the settings panel when multiple funnels present
    if (this.funnelOpened === funnel && this.hasManyFunnels) {
      this.funnelOpened = undefined
      return
    }

    this.funnelOpened = funnel
  }

  /**
   * Removes the funnel preview
   */
  handleRemoveFunnel = (funnel: FunnelPreviewStore) => {
    this.funnels.remove(funnel)
  }

  /**
   * Resets all the state.
   */
  handleReset = () => {
    this.funnels.clear()
    this.funnelOpened = undefined
    this.parsingError = undefined
    this.isLandingModalOpened = false
  }
}

export const app = new AppStore()
