import cx from 'classnames'
import { ReactNode } from 'react'

export interface FieldProps {
  className?: string
  children: ReactNode
  name?: string
  label?: ReactNode
}

export const Field = ({ className, children, name, label }: FieldProps) => {
  console.log('name', name)

  return (
    <div className={cx('flex flex-col', className)}>
      <label className="mb-3 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>

      <div>{children}</div>

      {/* {error} */}
    </div>
  )
}
