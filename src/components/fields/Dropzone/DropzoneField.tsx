import { Dropzone, DropzoneProps } from './Dropzone'

export interface DropzoneFieldProps extends Omit<DropzoneProps, 'value' | 'onChange'> {}

export const DropzoneField = (props: DropzoneFieldProps) => {
  return <Dropzone {...props} />
}
