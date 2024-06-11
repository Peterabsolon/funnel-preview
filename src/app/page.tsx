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
    <div
      className={cx(
        'flex flex-1 items-start justify-between',
        'max-w-full gap-8 py-8',
        // Center preview device relative to the viewport on larger devices
        `xl:pl-[${SIDEBAR_WIDTH_PX}px]`,
      )}
    >
      <main className="flex flex-1 flex-row items-start justify-center gap-8 overflow-x-auto">
        {app.funnels.map((funnel) => (
          <div key={funnel.id} className={cx('flex-none items-start justify-center')}>
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
