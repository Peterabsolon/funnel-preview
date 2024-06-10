import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

import { IPhone14ProDevice } from './devices/iPhone14Pro.device'
import { FunnelStore } from './FunnelPreview.store'

export const DEVICES = {
  iPhone14Pro: {
    name: 'iPhone 14 Pro',
    Component: IPhone14ProDevice,
  },
} as const

export type DeviceType = keyof typeof DEVICES

export type FunnelPreviewDeviceData = (typeof DEVICES)[DeviceType]

export interface FunnelPreviewDeviceProps {
  funnel: FunnelStore
  children: ReactNode
  className?: string
}

export const FunnelPreviewDevice = observer(({ funnel, children, className }: FunnelPreviewDeviceProps) => {
  const { bgColor, device, deviceScale, deviceTheme } = funnel
  const { Component } = DEVICES[device]

  return (
    <div className={className} style={{ transform: `scale(${deviceScale})`, transformOrigin: 'top' }}>
      <Component bgColor={bgColor} theme={deviceTheme}>
        {children}
      </Component>
    </div>
  )
})
