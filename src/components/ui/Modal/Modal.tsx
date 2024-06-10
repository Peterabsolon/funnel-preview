import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

import { Card } from '../Card'

export interface ModalProps {
  children: ReactNode
  withBackdrop?: boolean
}

export const Modal = observer(({ children, withBackdrop = true }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex flex-1 items-center justify-center">
      {withBackdrop && <div className="fixed inset-0 z-10 bg-black opacity-80" />}

      <Card className="z-20 flex w-full max-w-[640px] flex-col items-center self-center">{children}</Card>
    </div>
  )
})
