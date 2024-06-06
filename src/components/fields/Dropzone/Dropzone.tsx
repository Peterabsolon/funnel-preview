'use client'

import { DropzoneProps as RCDropzoneProps, useDropzone } from 'react-dropzone'
import cx from 'classnames'

import { Button } from '~/components/ui/Button'
import { ReactNode } from 'react'

const DEFAULT_LABEL = 'Drag n drop some files here, or click to select files'
const DEFAULT_BUTTON_LABEL = 'Select files'

export interface DropzoneProps extends RCDropzoneProps {
  /**
   * Root element className
   */
  className?: string

  /**
   * Optional label
   */
  label?: string

  /**
   * Optional label
   */
  buttonLabel?: string

  /**
   * Optional, large icon in the middle
   */
  icon?: ReactNode
}

export const Dropzone = ({
  label = DEFAULT_LABEL,
  buttonLabel = DEFAULT_BUTTON_LABEL,
  icon,
  ...props
}: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone(props)

  return (
    <div
      className={cx(
        'border-dashed border-4 border-slate-800 rounded-xl',
        'flex items-stretch justify-stretch',
        'relative w-full p-10',
      )}
      {...getRootProps()}
    >
      {isDragActive && <div className="absolute inset-0 bg-blue-400 opacity-20 z-10" />}

      <div className="z-20 flex flex-col items-center justify-center w-full">
        <input {...getInputProps()} />

        {icon && icon}

        <p className="text-center mb-6">{isDragActive ? 'Drop the file here' : label}</p>

        <Button className="w-full max-w-60">{buttonLabel}</Button>
      </div>
    </div>
  )
}
