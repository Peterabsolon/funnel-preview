import './globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { font } from './font'
import { Footer } from './footer'
import { Header } from './header'

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
      <body className={`${font.className} flex flex-col items-stretch justify-stretch bg-slate-950`}>
        <Header />
        <main className="flex flex-1 items-stretch justify-center overflow-auto px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
