import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Dropzone } from '~/components/fields'
import { Alert, Button, Modal } from '~/components/ui'

import { Logo } from '../Logo'

export const LandingModal = observer(() => {
  return (
    <Modal>
      <div className="mb-8 flex items-center justify-center">
        <h1 className="w-32 flex-1 text-right font-medium">Welcome to</h1>
        <Logo withText={false} className="mx-4" />
        <h1 className="w-32 flex-1 text-left font-medium">Funnel Preview</h1>
      </div>

      {app.parsingErrorMessage && (
        <Alert className="mb-8" level="error">
          {app.parsingErrorMessage}
        </Alert>
      )}

      <Dropzone
        acceptFilesPreset="JSON"
        className="mb-8"
        label="Drop JSON files here or use the button below to select files"
        onDropAccepted={app.loadFiles}
      />

      <span className="mb-4">Don&apos;t have a file?</span>

      <Button onClick={app.useDemoFile} className="w-full max-w-60" variant="secondary">
        Use demo file
      </Button>
    </Modal>
  )
})
