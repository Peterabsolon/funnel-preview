import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

import { Card } from '../Card'

export type AlertLevel = 'info' | 'error'

export interface AlertProps {
  /**
   * Root element className
   */
  className?: string

  /**
   * The alert level
   */
  level: AlertLevel

  /**
   * The message rendered
   */
  children: ReactNode
}

/** TODO: Enable Tailwind VSCode extension setting such that intellisense works outside of JSX */
// const levels: { [key in AlertLevel]: string } = {
//   info: '',
//   error: '',
// }

export const Alert = observer(({ className, children }: AlertProps) => {
  return (
    <Card className={cx('emboss-effect w-full border border-red-800 bg-red-500 p-6 text-white', className)}>
      {children}
    </Card>
  )
})
