'use client'

import { observer } from 'mobx-react-lite'

import { Pagination } from '~/components/ui/Pagination'

import { FunnelStore } from '../Funnel.store'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'
import { FunnelPreviewPage } from './FunnelPreviewPage'

export interface FunnelPreviewProps {
  funnel: FunnelStore
}

export const FunnelPreview = observer(({ funnel }: FunnelPreviewProps) => {
  const { device, page, setPage } = funnel
  const { name, pages = [], bgColor } = funnel.data ?? {}

  const pageToView = pages[page]

  return (
    <div>
      <h2 className="my-8 text-xl">{name}</h2>

      {pageToView && (
        <FunnelPreviewDevice bgColor={bgColor} className="mb-6" device={device}>
          <FunnelPreviewPage page={pageToView} />
        </FunnelPreviewDevice>
      )}

      <Pagination page={page} setPage={setPage} pagesCount={pages.length} />
    </div>
  )
})
