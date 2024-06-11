'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { Card, Pagination } from '~/components/ui'

import { DEVICES } from './FunnelPreview.constants'
import { FunnelPreviewStore } from './FunnelPreview.store'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'
import { FunnelPreviewPage } from './FunnelPreviewPage'

const REM_PX = 16

export interface FunnelProps {
  funnel: FunnelPreviewStore
  isFocused?: boolean
}

export const FunnelPreview = observer(({ funnel }: FunnelProps) => {
  const { app, page, pageContent, pagesCount, setPage } = funnel
  const { funnelOpened, hasManyFunnels } = app

  // only use highlights when we have multiple funnels
  const isHighlighted = funnel === funnelOpened && hasManyFunnels
  const isTransparent = !isHighlighted ?? !hasManyFunnels

  const minWidth = DEVICES[funnel.settings.device].minPanelWidth
  const width = Math.max((funnel.settings.renderedDeviceWidth ?? 0) + 64, minWidth)

  return (
    <Card
      onClick={() => app.handleToggleFunnelSettings(funnel)}
      style={{
        width,
        maxHeight: `calc(100vh - ${10 * REM_PX})px`,
      }}
      className={cx('rounded-md', {
        'bg-slate-900': isHighlighted,
        'bg-transparent': isTransparent,
        'cursor-pointer hover:bg-slate-900': hasManyFunnels,
      })}
    >
      {hasManyFunnels && <h2 className="mb-6 text-center text-xl">{funnel.data?.name}</h2>}

      <Pagination className="mb-8" page={page} setPage={setPage} pagesCount={pagesCount} />

      {pageContent && (
        <FunnelPreviewDevice className="mb-6" funnel={funnel}>
          <FunnelPreviewPage page={pageContent} />
        </FunnelPreviewDevice>
      )}
    </Card>
  )
})
