'use client'

import { observer } from 'mobx-react-lite'

import { Pagination } from '~/components/ui'

import { FunnelPreviewStore } from './FunnelPreview.store'
import { FunnelPreviewCard } from './FunnelPreviewCard'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'
import { FunnelPreviewPage } from './FunnelPreviewPage'

export interface FunnelProps {
  funnel: FunnelPreviewStore
  isFocused?: boolean
}

export const FunnelPreview = observer(({ funnel }: FunnelProps) => {
  const { app, page, pageContent, pagesCount, setPage } = funnel
  const { hasManyFunnels } = app

  return (
    <FunnelPreviewCard funnel={funnel} onClick={() => app.handleToggleFunnelSettings(funnel)}>
      {hasManyFunnels && <h2 className="mb-6 text-center text-xl">{funnel.data?.name}</h2>}

      <Pagination className="mb-8" page={page} setPage={setPage} pagesCount={pagesCount} />

      {pageContent && (
        <FunnelPreviewDevice className="mb-6" funnel={funnel}>
          <FunnelPreviewPage page={pageContent} />
        </FunnelPreviewDevice>
      )}
    </FunnelPreviewCard>
  )
})
