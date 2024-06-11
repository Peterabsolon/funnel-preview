import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

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
    <div
      className={cx(
        'relative w-full',
        'emboss-effect rounded-xl border border-red-600 bg-red-500 p-6 text-white drop-shadow-2xl',
        className,
      )}
    >
      {children}
    </div>
  )
})
