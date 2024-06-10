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
  const { device, deviceTheme, deviceScale, page, setPage } = funnel
  const { pages = [], bgColor } = funnel.data ?? {}

  const pageToView = pages[page]

  return (
    <div className="py-8">
      <Pagination className="mb-8" page={page} setPage={setPage} pagesCount={pages.length} />

      {pageToView && (
        <FunnelPreviewDevice bgColor={bgColor} className="mb-6" device={device} theme={deviceTheme} scale={deviceScale}>
          <FunnelPreviewPage page={pageToView} />
        </FunnelPreviewDevice>
      )}
    </div>
  )
})
