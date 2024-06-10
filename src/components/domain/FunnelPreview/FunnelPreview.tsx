'use client'

import { observer } from 'mobx-react-lite'

import { Pagination } from '~/components/ui'

import { FunnelStore } from './FunnelPreview.store'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'
import { FunnelPreviewPage } from './FunnelPreviewPage'

export interface FunnelProps {
  funnel: FunnelStore
}

export const FunnelPreview = observer(({ funnel }: FunnelProps) => {
  const { page, pageContent, pagesCount, setPage } = funnel

  return (
    <div className="py-8">
      <Pagination className="mb-8" page={page} setPage={setPage} pagesCount={pagesCount} />

      {pageContent && (
        <FunnelPreviewDevice className="mb-6" funnel={funnel}>
          <FunnelPreviewPage page={pageContent} />
        </FunnelPreviewDevice>
      )}
    </div>
  )
})
