import { observer } from 'mobx-react-lite'

import { Button, Card } from '~/components/ui'

import { Logo } from '../Logo'
import { Dropzone } from '~/components/fields'
import { app } from '~/app/store'

export const LandingModal = observer(() => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="flex flex-col items-center self-center w-full max-w-[600px]">
        <div className="flex items-center mb-8">
          <h1 className="mr-4">Welcome to</h1>
          <Logo />
        </div>

        <Dropzone
          acceptFilesPreset="JSON"
          className="mb-8"
          label="Start by dropping JSON files here, or click to select files"
          onDrop={(files) => app.loadFiles(files)}
        />

        <span className="mb-4">Don&apos;t have a file?</span>

        <Button className="w-full max-w-60" variant="secondary">
          Use demo file
        </Button>
      </Card>
    </div>
  )
})
