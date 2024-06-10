'use client'

import { observer } from 'mobx-react-lite'

import { Button, Logo } from '~/components'

import { app } from './store'

export const Header = observer(() => {
  if (!app.funnels.length) {
    return null
  }

  return (
    <header className="flex items-center justify-between border-b border-b-slate-800 p-8 py-6">
      <div className="flex items-center">
        <Logo withText />
      </div>

      <div className="flex gap-4">
        <Button onClick={app.reset} variant="secondary">
          Reset
        </Button>
      </div>
    </header>
  )
})
