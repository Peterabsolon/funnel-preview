import type { Meta } from '@storybook/react'
import { useState } from 'react'

import { Pagination } from './Pagination'

const meta = {
  title: 'ui/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

const Template = () => {
  const [page, setPage] = useState(1)

  return <Pagination page={page} setPage={setPage} pagesCount={5} />
}

export const Default = Template.bind({})
