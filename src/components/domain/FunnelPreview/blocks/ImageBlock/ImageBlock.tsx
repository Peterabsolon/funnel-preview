import * as T from '~/types'

export interface ImageBlockProps {
  block: T.ImageBlock
}

export const ImageBlock = ({ block }: ImageBlockProps) => {
  const { src, alt } = block

  return <img className="mb-8 rounded-md" alt={alt || 'Image block'} src={src} />
}
