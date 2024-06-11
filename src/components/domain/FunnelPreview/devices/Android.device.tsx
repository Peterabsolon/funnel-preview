import { observer } from 'mobx-react-lite'
import { forwardRef, ReactNode } from 'react'

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

  /**
   * Should show device frame?
   */
  withFrame?: boolean
}

export const AndroidDevice = observer(
  forwardRef<HTMLDivElement, Props>(({ children, bgColor, theme, withFrame = true }: Props, ref) => {
    const deviceBgImgUrl = withFrame ? `url("/devices/Android Phone, ${theme} theme@3x.png")` : undefined

    // 197px 35px 108px 29px

    return (
      <div className="flex justify-center">
        <div
          ref={ref}
          className="relative bg-cover"
          style={{
            backgroundImage: deviceBgImgUrl,
            /**
             * These arbitrarily seeming values were surgically measured from the device background image such that
             * all device/viewport/content sizes/ratios line up exactly.
             */
            width: 1428 / 3,
            height: 2810 / 3,
            paddingLeft: 30,
            paddingRight: 35,
            paddingTop: withFrame ? 197 : 0,
            paddingBottom: withFrame ? 108 : 317,
            margin: withFrame ? 0 : `0 -35px 0 -29px`,
          }}
        >
          {/* The viewport */}
          <div
            className="no-scrollbar overflow-y-auto"
            style={{
              backgroundColor: bgColor,
              width: '100%',
              height: '100%',
              aspectRatio: 412 / 732,
            }}
          >
            {/* The rendered content */}
            <div className="p-3 pt-6">{children}</div>
          </div>
        </div>
      </div>
    )
  }),
)
