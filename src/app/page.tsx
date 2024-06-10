'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { FunnelPreview, FunnelPreviewSettings, LandingModal } from '~/components'

import { app } from './store'

const SIDEBAR_WIDTH = 460

const App = observer(() => {
  if (!app.funnels.length) {
    return <LandingModal withBackdrop={false} />
  }

  return (
    <div
      className={cx(
        'flex flex-1 items-start justify-between gap-8',
        // Center preview device relative to the viewport on larger devices
        `xl:pl-[${SIDEBAR_WIDTH}px]`,
      )}
    >
      <main className="flex flex-1 items-start justify-center gap-8">
        {app.funnels.map((funnel) => (
          <div key={funnel.id} className={cx('flex items-start justify-center')}>
            <FunnelPreview funnel={funnel} />
          </div>
        ))}
      </main>

      <div style={{ width: SIDEBAR_WIDTH }} className="absolute left-auto right-8 top-24 py-6">
        {app.funnelOpened && <FunnelPreviewSettings funnel={app.funnelOpened} />}
      </div>

      {app.isLandingModalOpened && <LandingModal title="Add new funnel" onClose={app.handleAbortAddNewFunnel} />}
    </div>
  )
})

export default App
