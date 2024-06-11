import { observer } from 'mobx-react-lite'
import { ReactNode, useEffect } from 'react'

import { DEVICES } from './FunnelPreview.constants'
import { FunnelPreviewStore } from './FunnelPreview.store'

export interface FunnelPreviewDeviceProps {
  funnel: FunnelPreviewStore
  children: ReactNode
  className?: string
}

export const FunnelPreviewDevice = observer(({ funnel, children, className }: FunnelPreviewDeviceProps) => {
  const { bgColor, settings } = funnel
  const { device, deviceScale, deviceTheme, deviceRef, isDeviceVisible } = settings
  const { Component } = DEVICES[device]

  useEffect(() => settings.setDeviceScaleBasedOnViewport(), [settings])

  return (
    <div className={className} style={{ transform: `scale(${deviceScale})`, transformOrigin: 'top' }}>
      <Component ref={deviceRef} bgColor={bgColor} theme={deviceTheme} withFrame={isDeviceVisible}>
        {children}
      </Component>
    </div>
  )
})
