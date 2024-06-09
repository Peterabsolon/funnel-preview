import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Dropzone, Toggle } from '~/components/fields'
import { Card } from '~/components/ui'

import { FunnelStore } from '../FunnelPreview/FunnelPreview.store'

export interface FunnelPreviewSettingsProps {
  funnel: FunnelStore
}

export const FunnelPreviewSettings = observer(({ funnel }: FunnelPreviewSettingsProps) => {
  const { name } = funnel.data || {}

  return (
    <Card>
      <h2 className="mb-6 text-center text-xl">{name}</h2>

      <Dropzone
        className="mb-6"
        iconHidden
        acceptFilesPreset="JSON"
        label="Drop new JSON file here"
        buttonLabel="Change funnel file"
        onDropAccepted={app.loadFiles}
      />

      <Toggle label="Dark device theme" checked={funnel.deviceTheme === 'dark'} onChange={funnel.toggleDarkTheme} />
    </Card>
  )
})
