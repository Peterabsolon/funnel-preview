import { makeAutoObservable, observable } from 'mobx'

import { FunnelStore } from '~/components'

export class AppStore {
  funnels = observable<FunnelStore>([])

  constructor() {
    makeAutoObservable(this)
  }

  /**
   * Loads and parses the JSON files.
   * Dropzone component already ensures we get .json files only.
   */
  loadFiles = async (files: File[]) => {
    console.log({ files })

    for (const file of files) {
      const text = await file.text()

      try {
        // TODO: Use Zod
        const data = JSON.parse(text)
        const store = new FunnelStore()
        store.loadData(data)
        this.funnels.push(store)
      } catch (err) {
        // TODO: Notification
        console.warn('Failed to parse file')
        continue
      }
    }
  }
}

export const app = new AppStore()
