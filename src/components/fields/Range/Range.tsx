import './Range.css'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { InputHTMLAttributes } from 'react'

import { Field, FieldProps } from '~/components/ui'

export interface RangeProps extends InputHTMLAttributes<HTMLInputElement>, Omit<FieldProps, 'children'> {
  /**
   * Human readable label for min
   */
  minLabel?: string

  /**
   * Human readable label for max
   */
  maxLabel?: string
}

export const Range = observer(
  ({ className, value, label, min = 0, minLabel, max = 100, maxLabel, name, ...inputProps }: RangeProps) => {
    return (
      <Field name={name} label={label}>
        <div className={cx('w-full', className)}>
          <input
            name={name}
            type="range"
            value={value}
            className={cx('range w-full cursor-pointer appearance-none rounded-full bg-slate-800')}
            min={min}
            max={max}
            {...inputProps}
          />

          <div className="flex items-center justify-between">
            <span>{minLabel || min}</span>
            <span>{maxLabel || max}</span>
          </div>
        </div>
      </Field>
    )
  },
)

// .slider {
//     appearance: none; /* removes browser-specific styling */
//     width: 300px; /* width of slider */
//     height: 25px; /* height of slider */
//     background: #FF5C35 ; /* orange background */
//     outline: none; /* remove outline */
//     border-radius: 50px; /* round corners */
// }

// .slider::-webkit-slider-thumb {
//   appearance: none; /* removes browser-specific styling */
//   width: 20px; /* handle width */
//   height: 20px; /* handle height */
//   border-radius: 50%; /* make it circular */
//   background: #FFFFFF; /* white color */
//   cursor: pointer; /* cursor on hover */
// }
