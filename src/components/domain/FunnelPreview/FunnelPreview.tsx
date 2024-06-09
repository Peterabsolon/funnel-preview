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
  const { device, deviceTheme, page, setPage } = funnel
  const { pages = [], bgColor } = funnel.data ?? {}

  const pageToView = pages[page]

  return (
    <div className="py-8">
      {pageToView && (
        <FunnelPreviewDevice bgColor={bgColor} className="mb-6" device={device} theme={deviceTheme}>
          <FunnelPreviewPage page={pageToView} />
        </FunnelPreviewDevice>
      )}

      <Pagination className="mt-8" page={page} setPage={setPage} pagesCount={pages.length} />
    </div>
  )
})
