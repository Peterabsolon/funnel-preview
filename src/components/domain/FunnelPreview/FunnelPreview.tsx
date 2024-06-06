'use client'

import { useState } from 'react'

import { Funnel } from '~/types'
import { Pagination } from '~/components/ui/Pagination'

import { FunnelPreviewPage } from './FunnelPreviewPage'
import { FunnelPreviewDeviceType } from './FunnelPreview.types'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'

export interface FunnelPreviewProps {
  funnel: Funnel
}

export const FunnelPreview = ({ funnel }: FunnelPreviewProps) => {
  const [page, setPage] = useState(0)
  const [device] = useState<FunnelPreviewDeviceType>('iPhone')

  const { name, pages } = funnel
  const funnelPage = pages[page]

  return (
    <div>
      <h2>{name}</h2>

      {funnelPage && (
        <FunnelPreviewDevice device={device}>
          <FunnelPreviewPage page={funnelPage} />
        </FunnelPreviewDevice>
      )}

      <Pagination page={page} pagesCount={funnel.pages.length} setPage={setPage} />
    </div>
  )
}
