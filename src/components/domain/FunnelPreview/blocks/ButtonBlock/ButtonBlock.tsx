import * as T from '~/types'

export interface ButtonBlockProps {
  block: T.ButtonBlock
}

export const ButtonBlock = ({ block }: ButtonBlockProps) => {
  const { text } = block

  return (
    <button type="button" onClick={() => console.log(`Button with text ${text} clicked`)}>
      {text}
    </button>
  )
}
