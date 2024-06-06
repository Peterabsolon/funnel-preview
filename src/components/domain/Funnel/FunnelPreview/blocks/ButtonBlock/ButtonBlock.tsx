import * as T from '~/types'

export interface ButtonBlockProps {
  block: T.ButtonBlock
}

export const ButtonBlock = ({ block }: ButtonBlockProps) => {
  const { text, bgColor, color } = block

  return (
    <button
      className="rounded-md py-4 px-10 mx-auto block mb-6"
      style={{ backgroundColor: bgColor, color }}
      type="button"
      onClick={() => console.log(`Button with text ${text} clicked`)}
    >
      {text}
    </button>
  )
}
