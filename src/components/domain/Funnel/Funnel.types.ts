export type { DeviceType } from './FunnelPreview/FunnelPreviewDevice'

export const DeviceThemes = ['light', 'dark'] as const
export type DeviceTheme = (typeof DeviceThemes)[number]

export const BrowserTypes = ['Safari', 'Chrome'] as const
export type BrowserType = (typeof BrowserTypes)[number]
