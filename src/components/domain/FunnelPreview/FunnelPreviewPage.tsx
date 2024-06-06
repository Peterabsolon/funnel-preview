import { FunnelPage } from '~/types'
import { ButtonBlock, ImageBlock, ListBlock, TextBlock } from './blocks'

export interface FunnelPreviewPageProps {
  page: FunnelPage
}

export const FunnelPreviewPage = ({ page }: FunnelPreviewPageProps) => {
  return (
    <div>
      {page.blocks.map((block) => {
        switch (block.type) {
          case 'button':
            return <ButtonBlock key={block.id} block={block} />

          case 'list':
            return <ListBlock key={block.id} block={block} />

          case 'image':
            return <ImageBlock key={block.id} block={block} />

          case 'text':
            return <TextBlock key={block.id} block={block} />

          default:
            return null
        }
      })}
    </div>
  )
}
