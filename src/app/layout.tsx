import { ReactNode } from 'react'

import type { Metadata } from 'next'

import { Header } from './header'
import { font } from './font'
import './globals.css'

export const metadata: Metadata = {
  title: 'Funnel preview',
  description: 'Work same from Peter Absolon',
}

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-950`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

// export default RootLayout
