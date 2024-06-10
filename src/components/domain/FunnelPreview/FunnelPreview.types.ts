import { BROWSER_TYPES, DEVICE_THEMES, DEVICES } from './FunnelPreview.constants'

export type DeviceType = keyof typeof DEVICES

export type FunnelPreviewDeviceData = (typeof DEVICES)[DeviceType]

export type DeviceTheme = (typeof DEVICE_THEMES)[number]

export type BrowserType = (typeof BROWSER_TYPES)[number]
