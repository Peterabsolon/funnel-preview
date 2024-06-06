import * as T from '~/types'

export interface TextBlockProps {
  block: T.TextBlock
}

export const TextBlock = ({ block }: TextBlockProps) => {
  const { text, color, align } = block

  return (
    <p style={{ color, textAlign: align }} className="mb-8">
      {text}
    </p>
  )
}
