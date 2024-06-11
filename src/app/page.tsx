'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { FunnelPreview, FunnelPreviewSettings, LandingModal } from '~/components'

import { app } from './store'

const SIDEBAR_WIDTH_PX = 460

const App = observer(() => {
  if (!app.funnels.length) {
    return <LandingModal />
  }

  return (
    <div className="flex max-w-full flex-1 overflow-hidden py-8">
      <main className="mr-8 flex flex-1 flex-row items-start justify-center overflow-x-auto">
        {app.funnels.map((funnel) => (
          <div key={funnel.id} className={cx('mr-8 flex-none last:mr-0')}>
            <FunnelPreview funnel={funnel} />
          </div>
        ))}
      </main>

      <div className={`flex-shrink-0 flex-basis-[${SIDEBAR_WIDTH_PX}px]`}>
        {app.funnelOpened && <FunnelPreviewSettings funnel={app.funnelOpened} />}
      </div>

      {app.isLandingModalOpened && (
        <LandingModal forAddNewFunnel title="Add new funnel" onClose={app.handleAbortAddNewFunnel} />
      )}
    </div>
  )
})

export default App
