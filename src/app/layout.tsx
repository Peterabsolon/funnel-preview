import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Header } from './header'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
