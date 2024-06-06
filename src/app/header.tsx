'use client'

import { observer } from 'mobx-react-lite'

import { Button, Logo } from '~/components'

import { app } from './store'

export const Header = observer(() => {
  if (!app.funnels.length) {
    return null
  }

  return (
    <header className="p-8 flex items-center justify-between border-b border-b-slate-800">
      <div className="flex items-center">
        <Logo withText />
      </div>

      <div className="flex gap-4">
        <Button variant="secondary">Sync devices toggle</Button>

        <Button onClick={app.reset} variant="secondary">
          Reset
        </Button>
      </div>
    </header>
  )
})
