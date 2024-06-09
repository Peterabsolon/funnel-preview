import { ReactNode } from 'react'

import { BrowserType, DeviceTheme } from '../../Funnel.types'

interface FunnelPreviewBrowserData {
  headerImgUrl: string
}

const BROWSERS: { [key in BrowserType]: { [theme in DeviceTheme]: FunnelPreviewBrowserData } } = {
  Safari: {
    dark: {
      headerImgUrl: '',
    },
    light: {
      headerImgUrl: '',
    },
  },

  Chrome: {
    dark: {
      headerImgUrl: '',
    },
    light: {
      headerImgUrl: '',
    },
  },
}

export interface FunnelPreviewBrowserProps {
  browser: BrowserType
  theme: DeviceTheme
  children: ReactNode
}

// on Iphone, let choose top or bottom position

export const FunnelPreviewBrowser = ({ children, browser, theme }: FunnelPreviewBrowserProps) => {
  const { headerImgUrl } = BROWSERS[browser][theme]

  return (
    <div className="flex">
      {headerImgUrl && (
        <div
          style={{
            background: `url("${headerImgUrl}")`,
            backgroundSize: 'cover',
          }}
        />
      )}

      <div className="justify-self-stretch">{children}</div>
    </div>
  )
}
