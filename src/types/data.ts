/**
 * Went with schema first approach using Zod to generate types.
 *
 * Can be done in reverse using https://github.com/fabien0102/ts-to-zod.
 * Working with TypeScript interfaces could be a bit cleaner, properties comments are preserved etc.
 */

import { z } from 'zod'

import { TEXT_BLOCK_ALIGN } from './enums'
import * as schemas from './schemas'

export type TextBlockAlign = (typeof TEXT_BLOCK_ALIGN)[number]

export type TextBlock = z.infer<typeof schemas.TextBlockSchema>
export type ButtonBlock = z.infer<typeof schemas.ButtonBlockSchema>
export type ListBlockItem = z.infer<typeof schemas.ListBlockItemSchema>
export type ListBlock = z.infer<typeof schemas.ListBlockSchema>
export type ImageBlock = z.infer<typeof schemas.ImageBlockSchema>

export type FunnelBlock = z.infer<typeof schemas.FunnelBlockSchema>
export type FunnelPage = z.infer<typeof schemas.FunnelPageSchema>

export type Funnel = z.infer<typeof schemas.FunnelSchema>
