import { AndroidDevice, IPhone14ProDevice } from './devices'

export const DEVICE_THEMES = ['light', 'dark'] as const

export const DEVICES = {
  iPhone14Pro: {
    name: 'iPhone 14 Pro',
    Component: IPhone14ProDevice,
    minViewportHeightForFullScale: 1280,
  },

  Android: {
    name: 'Nexus 6P', // not actually, some random model I found .svg for
    Component: AndroidDevice,
    minViewportHeightForFullScale: 1280,
  },
} as const

// TODO:
export const BROWSER_TYPES = ['Safari', 'Chrome'] as const
