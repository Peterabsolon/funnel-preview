import cx from 'classnames'
import { InputHTMLAttributes } from 'react'

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The field label, rendered above
   */
  label: string

  /**
   * Off label, rendeerd on the left
   */
  labelOff?: string

  /**
   * On label, rendered on the right
   */
  labelOn?: string

  /**
   * Is the toggle enabled?
   */
  checked?: boolean
}

export const Toggle = ({ label, labelOff, labelOn, checked, onChange }: ToggleProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />

      {labelOff}

      <div
        className={cx(
          'relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-400 dark:border-slate-600 dark:bg-slate-700',
          'peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500',
          "after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']",
        )}
      />

      {labelOn && <span className="ml-2">{labelOn}</span>}

      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
    </label>
  )
}
