'use client'

import { observer } from 'mobx-react-lite'

import { Funnel } from '~/components'

import { Header } from './header'
import { app } from './store'
import Link from 'next/link'

const App = observer(() => {
  return (
    <div>
      <Header />

      <Link href="/landing">Landing</Link>
      <Link href="/preview">Preview</Link>

      <div className="flex flex-1 justify-center gap-8">
        {app.funnels.map((funnel) => (
          <div key={funnel.id} className="flex items-stretch w-full max-w-[520px]">
            <Funnel funnel={funnel} />
          </div>
        ))}
      </div>
    </div>
  )
})

export default App
