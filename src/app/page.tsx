'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { FunnelPreview, FunnelPreviewSettings, LandingModal } from '~/components'

import { app } from './store'

const SIDEBAR_WIDTH = 460

const App = observer(() => {
  const { funnels, funnelWithSettingsOpened } = app

  if (!funnels.length) {
    return <LandingModal />
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

      <div style={{ width: SIDEBAR_WIDTH }} className="py-6">
        {funnelWithSettingsOpened && <FunnelPreviewSettings funnel={funnelWithSettingsOpened} />}
      </div>
    </div>
  )
})

export default App
