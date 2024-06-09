'use client'

import { observer } from 'mobx-react-lite'

import { Funnel, LandingModal } from '~/components'

import { app } from './store'

const App = observer(() => {
  if (!app.funnels.length) {
    return <LandingModal />
  }

  return (
    <div className="flex flex-1 justify-center gap-8">
      {app.funnels.map((funnel) => (
        <div key={funnel.id} className="flex w-full max-w-[520px] items-stretch">
          <Funnel funnel={funnel} />
        </div>
      ))}
    </div>
  )
})

export default App
