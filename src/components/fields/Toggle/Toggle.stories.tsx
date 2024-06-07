import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'

const meta = {
  title: 'ui/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Toggle',
  },
}
