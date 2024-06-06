import * as T from '~/types'

export interface ButtonBlockProps {
  block: T.ButtonBlock
}

export const ButtonBlock = ({ block }: ButtonBlockProps) => {
  const { text } = block

  return <div>ButtonBlock - {text}</div>
}
