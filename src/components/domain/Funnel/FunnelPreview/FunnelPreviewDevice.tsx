import { ReactNode } from 'react'
import { observer } from 'mobx-react-lite'
import cx from 'classnames'

import { FunnelPreviewDeviceType } from '../Funnel.types'

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
  bgColor?: string
  children: ReactNode
  className?: string
  device: FunnelPreviewDeviceType
}

export const FunnelPreviewDevice = observer(({ bgColor, children, className, device }: FunnelPreviewDeviceProps) => {
  const { width, height } = DEVICES[device]

  return (
    <div
      className={cx('border rounded-xl overflow-auto p-2', className)}
      style={{ width, height, backgroundColor: bgColor }}
    >
      {children}
    </div>
  )
})
