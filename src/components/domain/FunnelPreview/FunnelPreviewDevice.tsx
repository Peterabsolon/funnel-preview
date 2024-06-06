import { ReactNode } from 'react'
import { FunnelPreviewDeviceType } from './FunnelPreview.types'

interface FunnelPreviewDeviceData {
  width: number
  height: number
  bgImageSrc: string
}

const DEVICES: { [key in FunnelPreviewDeviceType]: FunnelPreviewDeviceData } = {
  Android: {
    width: 375,
    height: 600,
    bgImageSrc: '//',
  },

  iPhone: {
    width: 375,
    height: 600,
    bgImageSrc: '//',
  },
}

export interface FunnelPreviewDeviceProps {
  device: FunnelPreviewDeviceType
  children: ReactNode
}

export const FunnelPreviewDevice = ({ device, children }: FunnelPreviewDeviceProps) => {
  const { width, height } = DEVICES[device]

  return (
    <div className="border rounded-lg" style={{ width, height }}>
      {children}
    </div>
  )
}
