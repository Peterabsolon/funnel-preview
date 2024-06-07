import { ReactNode } from 'react'
import { BrowserTheme, BrowserType } from '../../Funnel.types'

interface FunnelPreviewBrowserData {
  headerImgUrl: string
}

const BROWSERS: { [key in BrowserType]: { [theme in BrowserTheme]: FunnelPreviewBrowserData } } = {
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
  theme: BrowserTheme
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
