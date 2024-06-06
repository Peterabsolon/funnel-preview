import { FunnelPage } from '~/types'
import { ButtonBlock } from './blocks/ButtonBlock/ButtonBlock'

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
            return 'List block todo'

          case 'image':
            return 'Image block todo'

          case 'text':
            return 'Text block todo'

          default:
            return null
        }
      })}
    </div>
  )
}
