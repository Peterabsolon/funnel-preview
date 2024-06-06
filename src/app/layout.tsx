import { ReactNode } from 'react'

import type { Metadata } from 'next'

import { Header } from './header'
import { font } from './font'
import { Footer } from './footer'
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
      <body className={`${font.className} bg-slate-950 flex flex-col items-stretch justify-stretch`}>
        <Header />
        <main className="flex flex-1 px-8 items-stretch">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// export default RootLayout
