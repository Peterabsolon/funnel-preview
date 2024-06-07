export const DeviceTypes = ['iPhone14Pro'] as const
export type DeviceType = (typeof DeviceTypes)[number]

export const BrowserThemes = ['light', 'dark'] as const
export type BrowserTheme = (typeof BrowserThemes)[number]

export const BrowserTypes = ['Safari', 'Chrome'] as const
export type BrowserType = (typeof BrowserTypes)[number]
