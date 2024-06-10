'use client'

import cx from 'classnames'
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
        <div
          key={funnel.id}
          className={cx(
            'flex w-full flex-1 items-start justify-center',
            // Center preview device relative to the viewport on larger devices
            `2xl:pl-[${SIDEBAR_WIDTH}px]`,
          )}
        >
          <FunnelPreview funnel={funnel} />
        </div>
      ))}

      <div style={{ width: SIDEBAR_WIDTH }} className="py-6">
        {/* TODO: Use "selectedFunnel" prop that is also TODO :)  */}
        {/* The plan was to have multiple funnel previews present on the page at the same time, for comparisons */}
        {app.funnels[0] && <FunnelPreviewSettings funnel={app.funnels[0]} />}
      </div>
    </div>
  )
})

export default App
