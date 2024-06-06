'use client'

import { observer } from 'mobx-react-lite'
import { LandingModal } from '~/components'

const LandingPage = observer(() => {
  return (
    <>
      <LandingModal />
    </>
  )
})

export default LandingPage
