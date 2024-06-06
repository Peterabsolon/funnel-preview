'use client'

import { observer } from 'mobx-react-lite'

import { Pagination } from '~/components/ui/Pagination'

import { FunnelStore } from '../Funnel.store'

import { FunnelPreviewPage } from './FunnelPreviewPage'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'

export interface FunnelPreviewProps {
  funnel: FunnelStore
}

export const FunnelPreview = observer(({ funnel }: FunnelPreviewProps) => {
  if (!funnel.data) {
    return null
  }

  const { deviceType, page, setPage } = funnel
  const { name, pages, bgColor } = funnel.data

  const funnelPage = pages[page]

  return (
    <div>
      <h2 className="my-8 text-xl">{name}</h2>

      {funnelPage && (
        <FunnelPreviewDevice bgColor={bgColor} className="mb-6" device={deviceType}>
          <FunnelPreviewPage page={funnelPage} />
        </FunnelPreviewDevice>
      )}

      <Pagination page={page} setPage={setPage} pagesCount={pages.length} />
    </div>
  )
})
