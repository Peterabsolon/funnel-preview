import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Dropzone, Range, Select, Toggle } from '~/components/fields'
import { TrashIcon, ZoomIcon } from '~/components/icons'
import { Button, Card } from '~/components/ui'

import { DEVICES } from '../FunnelPreview/FunnelPreview.constants'
import { FunnelPreviewStore } from '../FunnelPreview/FunnelPreview.store'
import { DeviceType } from '../FunnelPreview/FunnelPreview.types'
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
        name="file"
        className="mb-6"
        classNameLabel="mb-6"
        fieldLabel="JSON file"
        iconHidden
        acceptFilesPreset="JSON"
        label="Drop new funnel JSON file here or"
        buttonLabel="Select new funnel file"
        maxFiles={1}
        onDropAccepted={app.handleReplaceOpenedFunnelFile}
      />

      <Range
        name="scale"
        className="mb-6"
        label="Preview scale"
        minLabel="1/2"
        min={DEVICE_SCALE_RANGE[0]}
        max={DEVICE_SCALE_RANGE[1]}
        step={0.01}
        value={settings.deviceScale}
        onChange={(evt) => settings.setDeviceScale(+evt.target.value)}
      />

      <Button
        className="mb-6 w-full"
        variant="secondary"
        onClick={settings.setDeviceScaleBasedOnViewport}
        iconLeft={<ZoomIcon className="mr-2 size-4" />}
      >
        Set scale automatically
      </Button>

      <Select<DeviceType>
        name="device"
        label="Device model"
        className="mb-6"
        value={settings.device}
        onChange={settings.setDevice}
        options={Object.entries(DEVICES).map(([key, device]) => ({
          label: device.name,
          value: key as DeviceType,
        }))}
      />

      <Toggle
        name="showDevice"
        className="mb-6"
        label="Show device frame"
        checked={settings.isDeviceVisible}
        onChange={settings.toggleIsDeviceVisible}
      />

      {settings.isDeviceVisible && (
        <>
          <Toggle
            label="Use dark theme"
            className="mb-6"
            checked={settings.deviceTheme === 'dark'}
            onChange={settings.toggleDarkTheme}
          />
        </>
      )}

      <Button
        className="w-full"
        variant="secondary"
        variantHover="danger"
        iconLeft={<TrashIcon className="mr-2 size-4" />}
        onClick={() => app.handleRemoveFunnel(funnel)}
      >
        Remove preview
      </Button>
    </Card>
  )
})
