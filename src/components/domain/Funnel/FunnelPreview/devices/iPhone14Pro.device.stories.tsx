import type { Meta, StoryObj } from '@storybook/react'

import { IPhone14ProDevice } from './iPhone14Pro.device'

const meta = {
  title: 'domain/FunnelPreview/devices/iPhone14Pro',
  component: IPhone14ProDevice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IPhone14ProDevice>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    theme: 'dark',
    children: 'IPhone14ProDevice - dark theme',
  },
}

export const Light: Story = {
  args: {
    theme: 'light',
    children: 'IPhone14ProDevice - light theme',
  },
}
