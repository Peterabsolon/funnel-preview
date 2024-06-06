export type TextBlockAlign = 'left' | 'center' | 'right'

export interface TextBlock {
  id: number
  type: 'text'
  text: string
  color?: string
  align?: TextBlockAlign
}

export interface ButtonBlock {
  id: number
  type: 'button'
}

export interface ListBlockItem {
  id: string
  title: string
  description?: string
  src?: string
}

export interface ListBlock {
  id: number
  type: 'list'
  items: ListBlockItem[]
}

export interface ImageBlock {
  id: number
  type: 'image'
  src: string
  alt?: string
}

export type FunnelBlock = TextBlock | ButtonBlock | ListBlock | ImageBlock
