import * as T from '~/types'

export interface ListBlockItemProps {
  item: T.ListBlockItem
}

export const ListBlockItem = ({ item }: ListBlockItemProps) => {
  const { id, src, title, description } = item

  return (
    <li key={id} className="mb-6 flex flex-row items-center justify-start gap-6">
      {src && <img width="20%" alt={title} src={src} />}

      <div>
        <p className="text-slate-800">{title}</p>

        {description && <p className="mt-2 text-slate-800">{description}</p>}
      </div>
    </li>
  )
}
