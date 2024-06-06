export const FunnelPreviewDeviceTypes = ['iPhone', 'Android'] as const
export type FunnelPreviewDeviceType = (typeof FunnelPreviewDeviceTypes)[number]

export const FunnelPreviewDeviceThemes = ['light', 'dark'] as const
export type FunnelPreviewDeviceTheme = (typeof FunnelPreviewDeviceThemes)[number]
