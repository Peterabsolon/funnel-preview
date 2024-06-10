import type { Meta, StoryObj } from '@storybook/react'

import { Funnel } from '~/types'

import funnelDemo from '../../../../fixtures/demo.funnel.json'
import { FunnelPreview } from './FunnelPreview'
import { FunnelStore } from './FunnelPreview.store'

const meta = {
  title: 'domain/FunnelPreview',
  component: FunnelPreview,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof FunnelPreview>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    funnel: new FunnelStore(funnelDemo as Funnel),
  },
}

const funnelLight = new FunnelStore(funnelDemo as Funnel)
funnelLight.toggleDarkTheme()

export const Light: Story = {
  args: {
    funnel: funnelLight,
  },
}
