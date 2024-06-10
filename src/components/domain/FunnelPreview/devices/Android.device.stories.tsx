import type { Meta, StoryObj } from '@storybook/react'

import { AndroidDevice } from './Android.device'

const meta = {
  title: 'devices/Android',
  component: AndroidDevice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AndroidDevice>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    theme: 'dark',
    children: 'AndroidDevice - dark theme',
  },
}

export const Light: Story = {
  args: {
    theme: 'light',
    children: 'AndroidDevice - light theme',
  },
}
