import type { Meta, StoryObj } from '@storybook/react'

import { LandingModal } from './LandingModal'

const meta = {
  title: 'domain/LandingModal',
  component: LandingModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LandingModal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'LandingModal',
  },
}
