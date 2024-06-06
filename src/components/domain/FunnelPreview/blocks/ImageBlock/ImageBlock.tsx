import * as T from '~/types'

export interface ImageBlockProps {
  block: T.ImageBlock
}

export const ImageBlock = ({ block }: ImageBlockProps) => {
  const { src, alt } = block

  return <img alt={alt || 'Image block'} src={src} />
}
