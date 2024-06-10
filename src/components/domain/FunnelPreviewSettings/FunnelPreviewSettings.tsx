import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Dropzone, Toggle } from '~/components/fields'
import { Range } from '~/components/fields/Range/Range'
import { Card } from '~/components/ui'

import { FunnelStore } from '../FunnelPreview/FunnelPreview.store'

export interface FunnelPreviewSettingsProps {
  funnel: FunnelStore
}

export const FunnelPreviewSettings = observer(({ funnel }: FunnelPreviewSettingsProps) => {
  const { isDeviceVisible } = funnel
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
        checked={funnel.isDeviceVisible}
        onChange={funnel.toggleIsDeviceVisible}
      />

      {isDeviceVisible && (
        <>
          <Range
            className="mb-6"
            label="Device scale"
            minLabel="1/2"
            min={0.5}
            max={2}
            step={0.01}
            value={funnel.deviceScale}
            onChange={(evt) => funnel.setDeviceScale(+evt.target.value)}
          />

          <Toggle label="Dark device theme" checked={funnel.deviceTheme === 'dark'} onChange={funnel.toggleDarkTheme} />
        </>
      )}
    </Card>
  )
})
