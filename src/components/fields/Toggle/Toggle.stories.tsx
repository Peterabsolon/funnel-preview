import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'ui/Toggle',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

// export const OnOffLabels: Story = {
//   args: {
//     label: 'Toggle me?',
//     labelOff: 'Off',
//     labelOn: 'On',
//   },
// }
