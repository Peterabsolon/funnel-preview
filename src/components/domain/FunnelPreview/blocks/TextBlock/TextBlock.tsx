import * as T from '~/types'

export interface TextBlockProps {
  block: T.TextBlock
}

export const TextBlock = ({ block }: TextBlockProps) => {
  const { text } = block

  return <div>{text}</div>
}
