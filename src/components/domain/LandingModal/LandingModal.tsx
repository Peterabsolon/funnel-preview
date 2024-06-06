import { observer } from 'mobx-react-lite'

import { Card } from '~/components/ui'

import { Logo } from '../Logo'

export const LandingModal = observer(() => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="self-center">
        <Logo />
      </Card>
    </div>
  )
})
