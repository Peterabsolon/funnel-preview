import type { Meta, StoryObj } from '@storybook/react'

import { AppStore } from '~/app/store'
import { Funnel } from '~/types'

import funnelDemo from '../../../../fixtures/demo.funnel.json'
import { FunnelPreview } from './FunnelPreview'
import { FunnelPreviewStore } from './FunnelPreview.store'

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

const app = new AppStore()

export const iPhone14ProDark: Story = {
  args: {
    funnel: new FunnelPreviewStore(app, funnelDemo as Funnel),
  },
}

const funnellPhone14ProLight = new FunnelPreviewStore(app, funnelDemo as Funnel)
funnellPhone14ProLight.settings.toggleDarkTheme()

export const iPhone14ProLight: Story = {
  args: {
    funnel: funnellPhone14ProLight,
  },
}

const funnelAndroidDark = new FunnelPreviewStore(app, funnelDemo as Funnel)
funnelAndroidDark.settings.setDevice('Android')

export const AndroidDark: Story = {
  args: {
    funnel: funnelAndroidDark,
  },
}

const funnelAndroidLight = new FunnelPreviewStore(app, funnelDemo as Funnel)
funnelAndroidLight.settings.setDevice('Android')
funnelAndroidLight.settings.toggleDarkTheme()

export const AndroidLight: Story = {
  args: {
    funnel: funnelAndroidLight,
  },
}
