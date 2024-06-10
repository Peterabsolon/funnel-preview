'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ElementType } from 'react'

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

  const isHighlighted = funnel.settings.isPanelOpened && app.funnels.length > 1
  const Wrapper = isHighlighted ? Card : ('div' as ElementType)

  return (
    <Wrapper
      className={cx('my-6 rounded-md p-8', {
        'bg-slate-900': isHighlighted,
      })}
    >
      <Pagination className="mb-8" page={page} setPage={setPage} pagesCount={pagesCount} />

      {pageContent && (
        <FunnelPreviewDevice className="mb-6" funnel={funnel}>
          <FunnelPreviewPage page={pageContent} />
        </FunnelPreviewDevice>
      )}
    </Wrapper>
  )
})
