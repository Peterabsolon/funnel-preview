import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Dropzone, Range, Toggle } from '~/components/fields'
import { Card } from '~/components/ui'

import { FunnelPreviewStore } from '../FunnelPreview/FunnelPreview.store'
import { DEVICE_SCALE_RANGE } from './FunnelPreviewSettings.constants'

export interface FunnelPreviewSettingsProps {
  funnel: FunnelPreviewStore
}

export const FunnelPreviewSettings = observer(({ funnel }: FunnelPreviewSettingsProps) => {
  const { settings } = funnel
  const { name } = funnel.data || {}

  return (
    <Card>
      <h2 className="mb-6 text-center text-xl">{name}</h2>

      <Dropzone
        className="mb-6"
        classNameLabel="mb-6"
        iconHidden
        acceptFilesPreset="JSON"
        label="Drop new funnel JSON file here or"
        buttonLabel="Select new funnel file"
        onDropAccepted={app.loadFiles}
      />

      <Toggle
        className="mb-6"
        label="Show device frame"
        checked={settings.isDeviceVisible}
        onChange={settings.toggleIsDeviceVisible}
      />

      <Range
        className="mb-6"
        label="Preview scale"
        minLabel="1/2"
        min={DEVICE_SCALE_RANGE[0]}
        max={DEVICE_SCALE_RANGE[1]}
        step={0.01}
        value={settings.deviceScale}
        onChange={(evt) => settings.setDeviceScale(+evt.target.value)}
      />

      {settings.isDeviceVisible && (
        <>
          <Toggle
            label="Use dark theme"
            checked={settings.deviceTheme === 'dark'}
            onChange={settings.toggleDarkTheme}
          />
        </>
      )}
    </Card>
  )
})
