import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

export const DEVICES = {
  iPhone14Pro: {
    name: 'iPhone 14 Pro',
    deviceMockupImgUrl: '/devices/iPhone 14 Pro – Space Black.png',
    deviceAspectRatio: 2672 / 1311,
    viewportPosition: {
      top: 150 / 2672,
      left: 72 / 1311,
      right: 72 / 1311,
      bottom: 200 / 1311,
    },
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

export const FunnelPreviewDevice = observer(({ bgColor, children, className, ...props }: FunnelPreviewDeviceProps) => {
  const { deviceAspectRatio, viewportPosition, deviceMockupImgUrl } = DEVICES[props.device]

  return (
    <div
      className="relative"
      style={{
        width: '100%',
        paddingBottom: `${deviceAspectRatio * 100}%`,
        height: 0,
      }}
    >
      {/* Device mockup image */}
      {deviceMockupImgUrl && (
        <div
          className="absolute inset-0"
          style={{ background: `url("${deviceMockupImgUrl}")`, backgroundSize: 'cover' }}
        />
      )}

      {/* Viewport */}
      <div
        className={cx('overflow-auto rounded-xl border p-2', className)}
        style={{
          backgroundColor: bgColor,
          position: 'absolute',
          top: ratioToPercent(viewportPosition.top),
          left: ratioToPercent(viewportPosition.left),
          right: ratioToPercent(viewportPosition.right),
          bottom: ratioToPercent(viewportPosition.bottom),
        }}
      >
        {children}
      </div>
    </div>
  )
})

const ratioToPercent = (ratio: number) => `${ratio * 100}%`
