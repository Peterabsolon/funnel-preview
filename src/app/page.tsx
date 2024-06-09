'use client'

import { observer } from 'mobx-react-lite'

import { FunnelPreview, FunnelPreviewSettings, LandingModal } from '~/components'

import { app } from './store'

const SIDEBAR_WIDTH = 460

const App = observer(() => {
  if (!app.funnels.length) {
    return <LandingModal />
  }

  return (
    <div className="flex flex-1 items-start justify-between gap-8">
      {app.funnels.map((funnel) => (
        <div key={funnel.id} className="flex w-full max-w-[520px] flex-1 items-stretch">
          <FunnelPreview funnel={funnel} />
        </div>
      ))}

      <div style={{ width: SIDEBAR_WIDTH }} className="py-6">
        {app.funnels[0] && <FunnelPreviewSettings funnel={app.funnels[0]} />}
      </div>
    </div>
  )
})

export default App
