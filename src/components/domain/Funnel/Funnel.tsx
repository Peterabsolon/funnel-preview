'use client'

import { observer } from 'mobx-react-lite'

import { Dropzone } from '~/components/fields'
import { Card } from '~/components/ui'

import { FunnelStore } from './Funnel.store'
import { FunnelPreview } from './FunnelPreview'

export interface FunnelProps {
  funnel: FunnelStore
}

export const Funnel = observer(({ funnel }: FunnelProps) => {
  if (!funnel.data) {
    return (
      <Card className="flex w-full items-stretch">
        <Dropzone
          label={
            <p>
              Drop JSON files here, <br /> or click to select from drive
            </p>
          }
          acceptFilesPreset="JSON"
          onDrop={(files) => console.log({ files })}
        />
      </Card>
    )
  }

  return <FunnelPreview funnel={funnel} />
})
