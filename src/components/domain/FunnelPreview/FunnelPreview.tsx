'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Card, Pagination } from '~/components/ui'

import { FunnelPreviewStore } from './FunnelPreview.store'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'
import { FunnelPreviewPage } from './FunnelPreviewPage'

export interface FunnelProps {
  funnel: FunnelPreviewStore
  isFocused?: boolean
}

export const FunnelPreview = observer(({ funnel }: FunnelProps) => {
  const { page, pageContent, pagesCount, setPage } = funnel
  const { hasManyFunnels } = app

  // only use highlights when we have multiple funnels
  const isHighlighted = funnel === app.funnelOpened && hasManyFunnels
  const isTransparent = !isHighlighted ?? !hasManyFunnels

  return (
    <Card
      onClick={() => app.handleToggleFunnelSettings(funnel)}
      className={cx('rounded-md', {
        'bg-slate-900': isHighlighted,
        'bg-transparent': isTransparent,
        'cursor-pointer hover:bg-slate-900': hasManyFunnels,
      })}
    >
      <Pagination className="mb-8" page={page} setPage={setPage} pagesCount={pagesCount} />

      {pageContent && (
        <FunnelPreviewDevice className="mb-6" funnel={funnel}>
          <FunnelPreviewPage page={pageContent} />
        </FunnelPreviewDevice>
      )}
    </Card>
  )
})
