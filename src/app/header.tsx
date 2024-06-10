'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { Button, Logo, PlusIcon, RestartIcon } from '~/components'

import { app } from './store'

export const Header = observer(() => {
  if (!app.funnels.length) {
    return null
  }

  return (
    <header
      className={cx('flex h-24 items-center justify-between p-8 py-6', 'border-b border-b-slate-800 bg-slate-950')}
    >
      <div className="flex items-center">
        <Logo withText />
      </div>

      <div className="flex gap-4">
        <Button iconLeft={<RestartIcon className="mr-2 h-4 w-4" />} onClick={app.handleReset} variant="secondary">
          Reset
        </Button>

        <Button iconLeft={<PlusIcon className="mr-2 h-4 w-4" />} onClick={app.handleAddNewFunnel} variant="primary">
          Add new
        </Button>
      </div>
    </header>
  )
})
