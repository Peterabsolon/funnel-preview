import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta = {
  title: 'domain/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    withText: false,
  },
}

export const WithText: Story = {
  args: {
    withText: true,
  },
}
