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
      <main
        className={cx('mr-8 flex flex-1 flex-row items-start overflow-x-auto', {
          'justify-center': !app.hasManyFunnels,
          'justify-start': app.hasManyFunnels,
        })}
      >
        {app.funnels.map((funnel) => (
          <div key={funnel.id} className="mr-8 flex-none last:mr-0">
            <FunnelPreview funnel={funnel} />
          </div>
        ))}
      </main>

      <div style={{ width: SIDEBAR_WIDTH_PX }} className="flex-shrink-0">
        {app.funnelOpened && <FunnelPreviewSettings funnel={app.funnelOpened} />}
      </div>

      {app.isLandingModalOpened && (
        <LandingModal forAddNewFunnel title="Add new funnel" onClose={app.handleAbortAddNewFunnel} />
      )}
    </div>
  )
})

export default App
