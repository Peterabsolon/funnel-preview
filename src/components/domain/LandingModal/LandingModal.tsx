import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Dropzone } from '~/components/fields'
import { BoltIcon } from '~/components/icons'
import { Alert, Button, Modal } from '~/components/ui'

import { Logo } from '../Logo'

interface LandingModalProps {
  onClose?: () => void
  title?: string
  forAddNewFunnel?: boolean
}

export const LandingModal = observer(({ title, onClose, forAddNewFunnel }: LandingModalProps) => {
  return (
    <Modal withBackdrop={forAddNewFunnel}>
      <div className="mb-8 flex items-center justify-center">
        {title ? (
          <h1 className="flex-1 text-center text-lg font-medium">{title}</h1>
        ) : (
          <>
            <h1 className="w-32 flex-1 text-right font-medium">Welcome to</h1>
            <Logo withText={false} className="mx-4" />
            <h1 className="w-32 flex-1 text-left font-medium">Funnel Preview</h1>
          </>
        )}
      </div>

      {app.parsingErrorMessage && (
        <Alert className="mb-8" level="error">
          {app.parsingErrorMessage}
        </Alert>
      )}

      <Dropzone
        acceptFilesPreset="JSON"
        className="mb-8"
        label="Drop funnel JSON file here or use the button below to select"
        buttonLabel="Select funnel file"
        onDropAccepted={app.handleLoadFiles}
      />

      <span className="mb-4">Don&apos;t have a file?</span>

      <Button
        iconLeft={<BoltIcon className="mr-2 h-4 w-4" />}
        onClick={app.handleUseDemoFile}
        className="w-full max-w-60"
        variant="secondary"
      >
        View demo
      </Button>

      {onClose && (
        <Button className="mt-10" variant="text" onClick={onClose}>
          Close
        </Button>
      )}
    </Modal>
  )
})
