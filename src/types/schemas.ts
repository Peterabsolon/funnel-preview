import { z } from 'zod'

import { TEXT_BLOCK_ALIGN } from './enums'

// TODO: Parse HEX colors
const color = z.string().refine(() => true, {
  message: 'Must be a valid HEX color code or HTML color name',
})

const imgSrcUrl = z.string().url()

export const TextBlockSchema = z.object({
  id: z.string(),
  type: z.literal('text'),
  text: z.string({ message: 'Text block must have a text' }),
  color: color.optional(),
  align: z.enum(TEXT_BLOCK_ALIGN).optional(),
})

export const ButtonBlockSchema = z.object({
  id: z.string(),
  type: z.literal('button'),
  text: z.string({ message: 'Button block must have a text' }),
  color: color.optional(),
  bgColor: color.optional(),
})

export const ListBlockItemSchema = z.object({
  id: z.string(),
  title: z.string({ message: 'List block item must have a text' }),
  description: z.string().optional(),
  src: imgSrcUrl.optional(),
})

export const ListBlockSchema = z.object({
  id: z.string(),
  type: z.literal('list'),
  items: z.array(ListBlockItemSchema).nonempty('List block must have atleast 1 item'),
})

export const ImageBlockSchema = z.object({
  id: z.string(),
  type: z.literal('image'),
  src: imgSrcUrl.optional(),
  alt: z.string().optional(),
})

export const FunnelBlockSchema = z.union([TextBlockSchema, ButtonBlockSchema, ListBlockSchema, ImageBlockSchema])

export const FunnelPageSchema = z.object({
  id: z.string(),
  blocks: z.array(FunnelBlockSchema).nonempty('Funnel page have atleast 1 block'),
})

export const FunnelSchema = z.object({
  name: z.string({ message: 'Funnel must have a name' }),
  bgColor: color.optional(),
  pages: z.array(FunnelPageSchema).nonempty('Funnel must have atleast 1 page'),
})
