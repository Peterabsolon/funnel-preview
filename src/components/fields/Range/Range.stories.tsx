import type { Meta, StoryObj } from '@storybook/react'

import { Range } from './Range'

const meta = {
  title: 'fields/Range',
  component: Range,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Range>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
