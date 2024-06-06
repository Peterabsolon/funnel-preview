export const FunnelPreviewDeviceTypes = ['iPhone', 'Android'] as const

export type FunnelPreviewDeviceType = (typeof FunnelPreviewDeviceTypes)[number]
