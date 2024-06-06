import Head from 'next/head'
import { ReactNode } from 'react'

export interface PageProps {
  title: string
  children: ReactNode
}

export const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title} | FunnelPreview</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
    </>
  )
}
