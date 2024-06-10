import { observer } from 'mobx-react-lite'
import { ReactNode, useEffect } from 'react'

import { DEVICES } from './FunnelPreview.constants'
import { FunnelStore } from './FunnelPreview.store'

export interface FunnelPreviewDeviceProps {
  funnel: FunnelStore
  children: ReactNode
  className?: string
}

export const FunnelPreviewDevice = observer(({ funnel, children, className }: FunnelPreviewDeviceProps) => {
  const { bgColor, device, deviceScale, deviceTheme, isDeviceVisible } = funnel
  const { Component } = DEVICES[device]

  useEffect(() => {
    funnel.setDeviceScaleBasedOnViewport()
  }, [funnel])

  return (
    <div className={className} style={{ transform: `scale(${deviceScale})`, transformOrigin: 'top' }}>
      <Component bgColor={bgColor} theme={deviceTheme} withFrame={isDeviceVisible}>
        {children}
      </Component>
    </div>
  )
})
