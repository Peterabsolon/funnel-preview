'use client'

import { useCallback, useEffect } from 'react'

import { Button } from '~/components/ui/Button'

export interface DropzoneProps {
  foo: string
}

export const Dropzone = (props: DropzoneProps) => {
  const fooFn = useCallback(() => {
    console.log(props.foo)
  }, [props.foo])

  useEffect(() => {
    fooFn()
  }, [fooFn])

  return (
    <div>
      Dropzone controlled
      <Button label="Sup" />
    </div>
  )
}
