import * as T from '~/types'
import { ListBlockItem } from './ListBlockItem'

export interface ListBlockProps {
  block: T.ListBlock
}

export const ListBlock = ({ block }: ListBlockProps) => {
  const { items } = block

  return (
    <ul className="mb-6">
      {items.map((item) => (
        <ListBlockItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
