'use client'

import { DropzoneProps as RCDropzoneProps, useDropzone } from 'react-dropzone'
import { Button } from '~/components/ui/Button'

// import { Button } from '~/components/ui/Button'

const DEFAULT_LABEL = 'Drag n drop some files here, or click to select files'

export interface DropzoneProps extends RCDropzoneProps {
  label?: string
}

export const Dropzone = ({ onDrop, label = DEFAULT_LABEL }: DropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  return (
    <div className="border-dashed border-4 border-slate-600 rounded-xl p-10" {...getRootProps()}>
      <input {...getInputProps()} />

      <p className="mb-6">{isDragActive ? 'Drop the files here ...' : label}</p>

      <Button className="w-full">Select files</Button>
    </div>
  )
}
