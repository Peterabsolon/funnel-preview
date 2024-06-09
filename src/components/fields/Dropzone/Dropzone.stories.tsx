import type { Meta, StoryObj } from '@storybook/react'

import { Dropzone } from './Dropzone'

const meta = {
  title: 'ui/Dropzone',
  component: Dropzone,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropzone>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Drop files here...',
    onDrop: (files) => alert(`Uploaded files: ${files.length}`),
  },
}

export const JSONPreset: Story = {
  args: {
    label: 'Drop JSON files here...',
    acceptFilesPreset: 'JSON',
    onDrop: (files) => alert(`Uploaded JSON files: ${files.length}`),
  },
}
