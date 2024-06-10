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
  index: number
  isFocused?: boolean
  onOpen: (funnel: FunnelPreviewStore) => void
}

export const FunnelPreview = observer(({ funnel, onOpen }: FunnelProps) => {
  const { page, pageContent, pagesCount, setPage } = funnel
  const { hasManyFunnels } = app

  const isHighlighted = funnel === app.funnelOpened && hasManyFunnels

  return (
    <Card
      onClick={() => onOpen(funnel)}
      className={cx('my-6 rounded-md p-8', {
        'border-transparent bg-transparent': !isHighlighted ?? !hasManyFunnels,
        'bg-slate-900': isHighlighted,
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
