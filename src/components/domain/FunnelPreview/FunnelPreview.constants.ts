import { IPhone14ProDevice } from './devices/iPhone14Pro.device'

export const DEVICE_THEMES = ['light', 'dark'] as const

export const DEVICES = {
  iPhone14Pro: {
    name: 'iPhone 14 Pro',
    Component: IPhone14ProDevice,
    minViewportHeightForFullScale: 1280,
  },

  // TODO: Android etc
} as const

// TODO:
export const BROWSER_TYPES = ['Safari', 'Chrome'] as const
