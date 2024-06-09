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
    <div className={cx('emboss-effect relative rounded-xl bg-slate-900 p-8 drop-shadow-2xl', className)}>
      {children}
    </div>
  )
})
