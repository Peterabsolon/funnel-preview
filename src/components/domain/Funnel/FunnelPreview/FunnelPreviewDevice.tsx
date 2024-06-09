import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

import { IPhone14ProDevice } from './devices/iPhone14Pro.device'

export const DEVICES = {
  iPhone14Pro: {
    name: 'iPhone 14 Pro',
    Component: IPhone14ProDevice,
  },
} as const

export type DeviceType = keyof typeof DEVICES

export type FunnelPreviewDeviceData = (typeof DEVICES)[DeviceType]

export interface FunnelPreviewDeviceProps {
  bgColor?: string
  children: ReactNode
  className?: string
  device: DeviceType
}

export const FunnelPreviewDevice = observer(({ bgColor, children, className, device }: FunnelPreviewDeviceProps) => {
  const { Component } = DEVICES[device]

  return (
    <div className={className}>
      <Component bgColor={bgColor} theme="dark">
        {children}
      </Component>
    </div>
  )
})
