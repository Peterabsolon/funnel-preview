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

export const iPhone14ProDark: Story = {
  args: {
    funnel: new FunnelStore(funnelDemo as Funnel),
  },
}

const funnellPhone14ProLight = new FunnelStore(funnelDemo as Funnel)
funnellPhone14ProLight.toggleDarkTheme()

export const iPhone14ProLight: Story = {
  args: {
    funnel: funnellPhone14ProLight,
  },
}

const funnelAndroidDark = new FunnelStore(funnelDemo as Funnel)
funnelAndroidDark.setDevice('Android')

export const AndroidDark: Story = {
  args: {
    funnel: funnelAndroidDark,
  },
}

const funnelAndroidLight = new FunnelStore(funnelDemo as Funnel)
funnelAndroidLight.setDevice('Android')
funnelAndroidLight.toggleDarkTheme()

export const AndroidLight: Story = {
  args: {
    funnel: funnelAndroidLight,
  },
}
