import { AndroidDevice, IPhone14ProDevice } from './devices'

export const DEVICE_THEMES = ['light', 'dark'] as const

export const DEVICE_SCALE_RANGE = [0.5, 2] as const

export const DEVICES = {
  iPhone14Pro: {
    name: (
      <>
        iPhone 14 Pro <br /> <span className="text-sm">(393 x 852px)</span>
      </>
    ),
    Component: IPhone14ProDevice,
    minViewportHeightForFullScale: 1280,
    minPanelWidth: 520,
    minPanelHeight: 720,
  },

  Android: {
    name: (
      <>
        Nexus 6P <br /> <span className="text-sm">(412 x 732px)</span>
      </>
    ),
    Component: AndroidDevice,
    minViewportHeightForFullScale: 1280,
    minPanelWidth: 540,
    minPanelHeight: 720,
  },
} as const

// TODO:
export const BROWSER_TYPES = ['Safari', 'Chrome'] as const
