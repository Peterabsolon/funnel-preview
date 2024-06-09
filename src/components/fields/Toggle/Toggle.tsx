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
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} className="sr-only peer" />

      <div
        className={cx(
          'relative w-11 h-6 rounded-full bg-gray-200 dark:bg-slate-700 dark:border-slate-600 peer-checked:bg-blue-400',
          'peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500',
          "after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all",
        )}
      />

      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
    </label>
  )
}
