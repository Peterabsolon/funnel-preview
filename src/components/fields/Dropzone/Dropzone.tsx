'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import { Accept, DropzoneProps as RCDropzoneProps, useDropzone } from 'react-dropzone'

import { JSONIcon } from '~/components/icons'
import { Button } from '~/components/ui/Button'

const DEFAULT_LABEL = (
  <>
    Drag n drop some files here, <br /> or click anywhere to select files
  </>
)

const DEFAULT_BUTTON_LABEL = 'Select files'

export type AcceptFilesPresets = 'JSON'

// Let's just pass a key instead of having to remember this
const ACCEPT_FILES_PRESETS: { [key in AcceptFilesPresets]: Accept } = {
  JSON: { 'application/json': ['.json'] },
}

const DEFAULT_ICON: { [key in AcceptFilesPresets]: ReactNode } = {
  JSON: <JSONIcon className="mb-12 h-24 w-24 text-slate-700" />,
}

export interface DropzoneProps extends RCDropzoneProps {
  /**
   * Data format preset to accept
   */
  acceptFilesPreset?: AcceptFilesPresets

  /**
   * Root element className
   */
  className?: string

  /**
   * Optional label
   */
  label?: ReactNode

  /**
   * Optional label
   */
  buttonLabel?: string

  /**
   * Optional, large icon in the middle
   */
  icon?: ReactNode
}

export const Dropzone = observer(
  ({
    acceptFilesPreset,
    className,
    label = DEFAULT_LABEL,
    buttonLabel = DEFAULT_BUTTON_LABEL,
    ...props
  }: DropzoneProps) => {
    const accept = props.accept ?? (acceptFilesPreset ? ACCEPT_FILES_PRESETS[acceptFilesPreset] : undefined)
    const icon = props.icon ?? (acceptFilesPreset ? DEFAULT_ICON[acceptFilesPreset] : undefined)

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      ...props,
      accept,
    })

    return (
      <div
        className={cx(
          'rounded-xl border-4 border-dashed border-slate-800',
          'flex items-stretch justify-stretch',
          'relative w-full p-10',
          className,
        )}
        {...getRootProps()}
      >
        {isDragActive && <div className="absolute inset-0 z-10 bg-blue-400 opacity-20" />}

        <div className="z-20 flex w-full flex-col items-center justify-center">
          <input {...getInputProps()} />

          {icon && icon}

          <p className="mb-12 text-center">{isDragActive ? 'Drop the file here' : label}</p>

          <Button className="w-full max-w-60">{buttonLabel}</Button>
        </div>
      </div>
    )
  },
)
