import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'

import { Card } from '~/components/ui'

import { DEVICES } from './FunnelPreview.constants'
import { FunnelPreviewStore } from './FunnelPreview.store'

const REM_PX = 16

export interface FunnelPreviewCardProps {
  children: ReactNode
  funnel: FunnelPreviewStore
  onClick: () => void
}

export const FunnelPreviewCard = observer(({ funnel, onClick, children }: FunnelPreviewCardProps) => {
  const { app } = funnel
  const { funnelOpened, hasManyFunnels } = app

  // only use highlights when we have multiple funnels
  const isHighlighted = funnel === funnelOpened && hasManyFunnels
  const isTransparent = !isHighlighted ?? !hasManyFunnels

  const { minPanelWidth, minPanelHeight } = DEVICES[funnel.settings.device]
  const [deviceWidth, deviceHeight] = funnel.settings.renderedDeviceDimensions ?? [0, 0]

  const paddingX = 4 * REM_PX
  const width = Math.max(deviceWidth + paddingX, minPanelWidth)

  const paddingY = (app.hasManyFunnels ? 12 : 10) * REM_PX
  const height = Math.max(deviceHeight + paddingY, minPanelHeight + paddingY)

  return (
    <Card
      onClick={onClick}
      style={{
        width,
        height,
        maxHeight: `calc(100vh - ${10 * REM_PX})px`,
      }}
      className={cx('rounded-md', {
        'bg-slate-900': isHighlighted,
        'bg-transparent': isTransparent,
        'cursor-pointer hover:bg-slate-900': hasManyFunnels,
      })}
    >
      {children}
    </Card>
  )
})
