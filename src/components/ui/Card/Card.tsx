import { ReactNode } from 'react'
import { observer } from 'mobx-react-lite'
import cx from 'classnames'

export interface CardProps {
  /**
   * Root element className
   */
  className?: string

  /**
   * The content
   */
  children: ReactNode
}

export const Card = observer(({ children, className }: CardProps) => {
  return (
    <div className={cx('emboss-effect drop-shadow-2xl relative bg-slate-900 rounded-xl p-8', className)}>
      {children}
    </div>
  )
})
