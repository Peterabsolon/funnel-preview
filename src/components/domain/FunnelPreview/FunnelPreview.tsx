'use client'

import { observer } from 'mobx-react-lite'

import { FunnelStore } from './FunnelPreview.store'
import { FunnelPreviewDevice } from './FunnelPreviewDevice'
import { FunnelPreviewPage } from './FunnelPreviewPage'

export interface FunnelProps {
  funnel: FunnelStore
}

export const FunnelPreview = observer(({ funnel }: FunnelProps) => {
  const { device, deviceTheme, page } = funnel
  const { name, pages = [], bgColor } = funnel.data ?? {}

  const pageToView = pages[page]

  return (
    <div>
      <h2 className="my-8 text-xl">{name}</h2>

      {pageToView && (
        <FunnelPreviewDevice bgColor={bgColor} className="mb-6" device={device} theme={deviceTheme}>
          <FunnelPreviewPage page={pageToView} />
        </FunnelPreviewDevice>
      )}
    </div>
  )
})