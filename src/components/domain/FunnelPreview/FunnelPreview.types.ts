export type { DeviceType } from './FunnelPreviewDevice'

export const DEVICE_THEMES = ['light', 'dark'] as const
export type DeviceTheme = (typeof DEVICE_THEMES)[number]

export const BROWSER_TYPES = ['Safari', 'Chrome'] as const
export type BrowserType = (typeof BROWSER_TYPES)[number]
