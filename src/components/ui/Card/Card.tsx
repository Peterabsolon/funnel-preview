import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

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
