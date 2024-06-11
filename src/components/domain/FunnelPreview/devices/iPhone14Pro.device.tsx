import cx from 'classnames'
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

export const IPhone14ProDevice = observer(
  forwardRef<HTMLDivElement, Props>(({ children, bgColor, theme, withFrame = true }, ref) => {
    const deviceBgImgUrl = withFrame ? `url("/devices/iPhone 14 Pro Space Black, ${theme} theme@3x.png")` : undefined

    return (
      <div className="flex justify-center">
        <div
          ref={ref}
          className={cx('relative bg-cover', {
            'rounded-xl': !withFrame,
          })}
          style={{
            backgroundImage: deviceBgImgUrl,
            /**
             * These arbitrarily seeming values were surgically measured from the device background image such that
             * all device/viewport/content sizes/ratios line up exactly.
             */
            width: 1336 / 3,
            height: 2686 / 3,
            paddingLeft: 26.5,
            paddingRight: 26,
            paddingTop: withFrame ? 81 : 0,
            paddingBottom: withFrame ? 156 : 237,
            margin: withFrame ? 0 : '1rem -26px',
          }}
        >
          {/* The viewport */}
          <div
            className={cx('no-scrollbar overflow-y-auto', {
              'rounded-xl': !withFrame,
            })}
            style={{
              backgroundColor: bgColor,
              width: '100%',
              height: '100%',
              /**
               * This is exact screen size/ratio for iPhone 14 Pro.
               */
              aspectRatio: 393 / 852,
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
