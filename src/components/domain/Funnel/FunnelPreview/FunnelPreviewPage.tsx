import { observer } from 'mobx-react-lite'

import * as T from '~/types'

import { ButtonBlock, ImageBlock, ListBlock, TextBlock } from './blocks'

export interface FunnelPreviewPageProps {
  page: T.FunnelPage
}

export const FunnelPreviewPage = observer(({ page }: FunnelPreviewPageProps) => {
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
})
