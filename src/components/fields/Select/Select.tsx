import cx from 'classnames'
import { observer } from 'mobx-react-lite'

import { SelectOption } from './SelectOption'

export interface SelectProps<T extends string> {
  className?: string
  options: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
}

export const Select = observer(<T extends string>({ className, options, value, onChange }: SelectProps<T>) => {
  return (
    <div className={cx('flex', className)}>
      {options.map((option) => (
        <SelectOption key={option.value} option={option} onSelect={onChange} value={value} />
      ))}
    </div>
  )
})
