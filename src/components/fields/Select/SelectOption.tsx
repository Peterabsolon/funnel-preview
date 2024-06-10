import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'

import { Button } from '~/components/ui'

export interface SelectOption<T extends string> {
  icon?: ReactNode
  value: T
  label: ReactNode
}

export interface SelectOptionProps<T extends string> {
  value?: T
  option: SelectOption<T>
  onSelect?: (value: T) => void
}

export const SelectOption = observer(<T extends string>({ option, value, onSelect }: SelectOptionProps<T>) => {
  const { label, icon } = option

  const handleClick = () => {
    if (onSelect) {
      onSelect(option.value)
    }
  }

  const isSelected = value === option.value

  return (
    <Button
      className="flex-1 rounded-none text-sm first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md"
      variant={isSelected ? 'primary' : 'secondary'}
      iconLeft={icon}
      onClick={handleClick}
    >
      {label}
    </Button>
  )
})
