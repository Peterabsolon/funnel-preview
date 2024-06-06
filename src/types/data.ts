/**
 * In real world/ideal case these are generated from some backend schema like swagger.json or graphql.schema etc.
 */

export type TextBlockAlign = 'left' | 'center' | 'right'

export interface TextBlock {
  id: string
  type: 'text'
  text: string
  color?: string
  align?: TextBlockAlign
}

export interface ButtonBlock {
  id: string
  type: 'button'
  text: string
  color?: string
  bgColor?: string
}

export interface ListBlockItem {
  id: string
  title: string
  description?: string
  src?: string
}

export interface ListBlock {
  id: string
  type: 'list'
  items: ListBlockItem[]
}

export interface ImageBlock {
  id: string
  type: 'image'
  src: string
  alt?: string
}

export type FunnelBlock = TextBlock | ButtonBlock | ListBlock | ImageBlock

export interface FunnelPage {
  id: string
  blocks: FunnelBlock[]
}

export interface Funnel {
  name: string
  pages: FunnelPage[]
}
