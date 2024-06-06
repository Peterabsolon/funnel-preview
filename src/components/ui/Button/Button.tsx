import { ButtonHTMLAttributes } from 'react'

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

export const Button = ({ children, label, variant = 'primary', ...props }: ButtonProps) => {
  return <button {...props}>{label || children}</button>
}
