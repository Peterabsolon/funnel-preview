import cx from 'classnames'

export interface ToggleProps {
  /**
   * The label
   */
  label: string

  /**
   * Is the toggle enabled?
   */
  checked?: boolean
}

export const Toggle = ({ label, checked }: ToggleProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" checked={checked} className="peer sr-only" />

      <div
        className={cx(
          'relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-400 dark:border-slate-600 dark:bg-slate-700',
          'peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500',
          "after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']",
        )}
      />

      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
    </label>
  )
}
