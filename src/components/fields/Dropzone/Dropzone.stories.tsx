import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'
import { Dropzone } from './Dropzone'

const meta = {
  title: 'ui/Dropzone',
  component: Dropzone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  //   args: { onClick: fn() },
} satisfies Meta<typeof Dropzone>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Drop files here...',
    onDrop: (files) => alert(`Uploaded files: ${files.length}`),
  },
}
