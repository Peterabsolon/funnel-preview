'use client'

import { ButtonHTMLAttributes } from 'react'
import cx from 'classnames'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button label. Optional, uses children if not passed
   */
  label?: string

  /**
   * The button color variant
   * @default 'primary'
   */
  variant?: ButtonVariant
}

/** There is a way to get Tailwind Intellisense support somehow */
const variants: { [key in ButtonVariant]: string } = {
  primary: 'bg-blue-400',
  secondary: 'bg-blue-100 text-blue-400',
}

export const Button = ({ children, label, variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cx('relative px-8 py-2 rounded-md font-medium inset-shadow', variants[variant], className)}
    >
      {label || children}
    </button>
  )
}
