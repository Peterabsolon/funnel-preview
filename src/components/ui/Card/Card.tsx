import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { CSSProperties, ReactNode } from 'react'

export interface CardProps {
  /**
   * Should animate appearance
   */
  animate?: boolean

  /**
   * Root element onClick handler
   */
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

export const Card = observer(({ animate = true, children, className, onClick, style }: CardProps) => {
  return (
    <div
      className={cx(
        'emboss-effect relative rounded-xl bg-slate-900 p-8 drop-shadow-2xl transition-colors',
        { 'animate-appear': animate },
        className,
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  )
})
