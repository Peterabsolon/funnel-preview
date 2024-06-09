import * as T from '~/types'

export interface ButtonBlockProps {
  block: T.ButtonBlock
}

export const ButtonBlock = ({ block }: ButtonBlockProps) => {
  const { text, bgColor, color } = block

  return (
    <button
      className="mx-auto mb-6 block rounded-md px-10 py-4"
      style={{ backgroundColor: bgColor, color }}
      type="button"
      onClick={() => console.log(`Button with text ${text} clicked`)}
    >
      {text}
    </button>
  )
}
