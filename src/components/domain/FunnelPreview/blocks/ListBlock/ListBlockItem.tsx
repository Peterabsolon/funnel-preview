import * as T from '~/types'

export interface ListBlockItemProps {
  item: T.ListBlockItem
}

export const ListBlockItem = ({ item }: ListBlockItemProps) => {
  const { id, src, title, description } = item

  return (
    <li key={id}>
      {src && <img alt={title} src={src} />}
      {title}
      {description}
    </li>
  )
}
