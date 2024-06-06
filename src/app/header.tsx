'use client'

import { Button, Logo } from '~/components'

import { app } from './store'

export const Header = () => {
  if (!app.funnels.length) {
    return null
  }

  return (
    <header className="p-8 flex items-center justify-between border-b border-b-slate-800">
      <div className="flex items-center">
        <Logo className="mr-4" />
        <h1 className="font-medium">Funnel Preview</h1>
      </div>

      <div className="flex gap-4">
        <Button variant="secondary">Sync devices toggle</Button>
        <Button variant="secondary">Reset</Button>
      </div>
    </header>
  )
}
