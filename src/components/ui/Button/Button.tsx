'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button label.
   * Optional, uses children if not passed.
   */
  label?: string

  /**
   * The button color variant.
   * @default 'primary'
   */
  variant?: ButtonVariant

  /**
   * The icon rendered on the left side of the label
   */
  iconLeft?: ReactNode

  /**
   * The icon rendered on the right side of the label
   */
  iconRight?: ReactNode
}

/** TODO: Enable Tailwind VSCode extension setting such that intellisense works outside of JSX */
const variants: { [key in ButtonVariant]: string } = {
  primary: 'bg-blue-500 hover:bg-blue-400',
  secondary: 'border border-blue-400 bg-slate-900 hover:bg-blue-400',
}

export const Button = observer(
  ({ children, label, variant = 'primary', className, iconLeft, iconRight, ...props }: ButtonProps) => (
    <button
      {...props}
      className={cx(
        'flex flex-row items-center justify-center',
        'emboss-effect relative rounded-md px-8 py-2 font-medium drop-shadow-2xl transition-colors',
        { 'pl-6': iconLeft, 'pr-6': iconRight },
        variants[variant],
        className,
      )}
    >
      {iconLeft}
      <span>{label || children}</span>
      {iconRight}
    </button>
  ),
)
