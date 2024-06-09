import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from './Alert'

const meta = {
  title: 'ui/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
    level: 'error',
    children: 'Alert - error',
  },
}
