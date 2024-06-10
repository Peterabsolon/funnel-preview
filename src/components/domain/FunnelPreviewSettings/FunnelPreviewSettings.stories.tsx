import type { Meta, StoryObj } from '@storybook/react'

import { Funnel } from '~/types'

import funnelDemo from '../../../../fixtures/demo.funnel.json'
import { FunnelStore } from '../FunnelPreview/FunnelPreview.store'
import { FunnelPreviewSettings } from './FunnelPreviewSettings'

const meta = {
  title: 'domain/FunnelPreviewSettings',
  component: FunnelPreviewSettings,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof FunnelPreviewSettings>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    funnel: new FunnelStore(funnelDemo as Funnel),
  },
}
