import { makeAutoObservable, observable } from 'mobx'

import { FunnelStore } from '~/components'

export class AppStore {
  funnels = observable<FunnelStore>([])

  constructor() {
    makeAutoObservable(this)
  }
}

export const app = new AppStore()
