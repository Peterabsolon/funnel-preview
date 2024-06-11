'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { Card, Pagination } from '~/components/ui'

import { FunnelPreviewStore } from './FunnelPreview.store'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'
import { FunnelPreviewPage } from './FunnelPreviewPage'

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
  const width = Math.max((funnel.settings.renderedDeviceWidth ?? 0) + 160, 520)

  return (
    <Card
      onClick={() => app.handleToggleFunnelSettings(funnel)}
      style={{ width }}
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
