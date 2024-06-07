import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Showcase',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Showcase = StoryObj<typeof meta>

// TODO: https://github.com/storybookjs/storybook/issues/25495#issuecomment-2061765583
export const Showcase: Showcase = {
  args: {
    // children: 'Card',
  },
}
