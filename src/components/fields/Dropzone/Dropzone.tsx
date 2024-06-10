'use client'

import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import { Accept, DropzoneProps as RCDropzoneProps, useDropzone } from 'react-dropzone'

import { JSONIcon, PlusIcon } from '~/components/icons'
import { Field, FieldProps } from '~/components/ui'
import { Button } from '~/components/ui/Button'

const DEFAULT_LABEL = (
  <>
    Drag n drop some files here, <br /> or click anywhere to select files
  </>
)

const DEFAULT_BUTTON_LABEL = 'Select files'

export type AcceptFilesPresets = 'JSON'

const ACCEPT_FILES_PRESETS: { [key in AcceptFilesPresets]: Accept } = {
  JSON: {
    'application/json': ['.json'],
  },
}

const DEFAULT_ICON: { [key in AcceptFilesPresets]: ReactNode } = {
  JSON: <JSONIcon className="mb-12 h-24 w-24 text-slate-700" />,
}

export interface DropzoneProps extends RCDropzoneProps, Omit<FieldProps, 'children'> {
  /**
   * Data format preset to accept
   */
  acceptFilesPreset?: AcceptFilesPresets

  /**
   * Root element className
   */
  className?: string

  /**
   * Label element className
   */
  classNameLabel?: string

  /**
   * Label rendered above the Dropzone
   */
  fieldLabel?: string

  /**
   * Optional label
   */
  buttonLabel?: string

  /**
   * Optional, large icon in the middle
   */
  icon?: ReactNode

  /**
   * Should icon be hidden?
   */
  iconHidden?: boolean
}

export const Dropzone = observer(
  ({
    acceptFilesPreset,
    className,
    classNameLabel,
    fieldLabel,
    label = DEFAULT_LABEL,
    buttonLabel = DEFAULT_BUTTON_LABEL,
    iconHidden,
    name,
    ...props
  }: DropzoneProps) => {
    const accept = props.accept ?? (acceptFilesPreset ? ACCEPT_FILES_PRESETS[acceptFilesPreset] : undefined)
    const icon = props.icon ?? (acceptFilesPreset ? DEFAULT_ICON[acceptFilesPreset] : undefined)

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
      ...props,
      /**
       * Needed so we can test file upload properly with Playwright
       * https://github.com/microsoft/playwright/issues/8850#issuecomment-1842670260
       */
      useFsAccessApi: false,
      accept,
    })

    return (
      <Field name={name} label={fieldLabel}>
        <div
          className={cx(
            'rounded-xl border-4 border-dashed border-slate-800',
            'flex items-stretch justify-stretch',
            'relative w-full p-10',
            className,
          )}
          {...getRootProps()}
        >
          {isDragActive && (
            <div
              className={cx('absolute inset-0 z-10 rounded-xl', {
                'bg-green-600': isDragAccept,
                'bg-red-700': isDragReject,
              })}
            />
          )}

          <div className="z-20 flex w-full flex-col items-center justify-center" data-testid="dropzone">
            <input {...getInputProps()} />

            {icon && !iconHidden && icon}

            <p className={cx('mb-12 text-center', classNameLabel)}>
              {isDragActive ? (isDragAccept ? 'Drop the file here' : 'This file is not supported :(') : label}
            </p>

            <Button iconLeft={<PlusIcon className="mr-2 h-4 w-4" />} className="w-full max-w-64">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Field>
    )
  },
)
