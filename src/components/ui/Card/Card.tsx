import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { CSSProperties, ReactNode } from 'react'

export interface CardProps {
  onClick?: () => void

  /**
   * Root element className
   */
  className?: string

  /**
   * Root element CSS
   */
  style?: CSSProperties

  /**
   * The content
   */
  children: ReactNode
}

export const Card = observer(({ children, className, onClick, style }: CardProps) => {
  return (
    <div
      className={cx('emboss-effect relative rounded-xl bg-slate-900 p-8 drop-shadow-2xl', className)}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
})
