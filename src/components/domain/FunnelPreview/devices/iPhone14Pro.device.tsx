import { ReactNode } from 'react'

import { DeviceTheme } from '../FunnelPreview.types'

type Props = {
  /**
   * Viewport background color
   */
  bgColor?: string

  /**
   * Viewport content
   */
  children: ReactNode

  /**
   * Device theme
   */
  theme: DeviceTheme
}

export const IPhone14ProDevice = ({ children, bgColor, theme }: Props) => {
  return (
    <div
      className="relative bg-cover"
      style={{
        backgroundImage: `url("/devices/iPhone 14 Pro Space Black, ${theme} theme@3x.png")`,
        width: 1336 / 3,
        height: 2686 / 3,
        /** Viewport paddings. Had to use half a px to get things aligned exactly with rasterized images */
        padding: '81px 26px 156px 26.5px',
      }}
    >
      {/* The viewport */}
      <div
        className="no-scrollbar overflow-y-auto"
        style={{
          backgroundColor: bgColor,
          width: '100%',
          height: '100%',
          aspectRatio: 393 / 852,
        }}
      >
        {/* The rendered content */}
        <div className="p-3">{children}</div>
      </div>
    </div>
  )
}
