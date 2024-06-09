import { observer } from 'mobx-react-lite'

import { app } from '~/app/store'
import { Dropzone } from '~/components/fields'
import { Button, Card } from '~/components/ui'

import { Logo } from '../Logo'

export const LandingModal = observer(() => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="flex flex-col items-center self-center w-full max-w-[640px]">
        <div className="flex items-center mb-8">
          <h1 className="mr-4 font-medium">Welcome to</h1>
          <Logo withText />
        </div>

        <Dropzone
          acceptFilesPreset="JSON"
          className="mb-8"
          label="Drop JSON files here or use the button below to select files"
          onDrop={(files) => app.loadFiles(files)}
        />

        <span className="mb-4">Don&apos;t have a file?</span>

        <Button onClick={app.useDemoFile} className="w-full max-w-60" variant="secondary">
          Use demo file
        </Button>
      </Card>
    </div>
  )
})
