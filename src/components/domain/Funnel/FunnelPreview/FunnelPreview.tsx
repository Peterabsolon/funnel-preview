'use client'

import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { Funnel } from '~/types'
import { Pagination } from '~/components/ui/Pagination'

import { FunnelPreviewDeviceType } from '../Funnel.types'

import { FunnelPreviewPage } from './FunnelPreviewPage'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'

export interface FunnelPreviewProps {
  funnel: Funnel
}

export const FunnelPreview = observer(({ funnel }: FunnelPreviewProps) => {
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
})
