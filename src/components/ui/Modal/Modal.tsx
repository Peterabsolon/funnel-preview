import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

import { Card } from '../Card'

export interface ModalProps {
  children: ReactNode
}

export const Modal = observer(({ children }: ModalProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="flex w-full max-w-[640px] flex-col items-center self-center">{children}</Card>
    </div>
  )
})
