import type { Meta, StoryObj } from '@storybook/react'

import { AppStore } from '~/app/store'
import { Funnel } from '~/types'

import funnelDemo from '../../../../fixtures/demo.funnel.json'
import { FunnelPreviewStore } from '../FunnelPreview/FunnelPreview.store'
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

const app = new AppStore()

export const Default: Story = {
  args: {
    funnel: new FunnelPreviewStore(app, funnelDemo as Funnel),
  },
}
