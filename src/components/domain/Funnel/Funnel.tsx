'use client'

import { observer } from 'mobx-react-lite'

import { Card } from '~/components/ui'
import { Dropzone } from '~/components/fields'

import { FunnelPreview } from './FunnelPreview'
import { FunnelStore } from './Funnel.store'

export interface FunnelProps {
  funnel: FunnelStore
}

export const Funnel = observer(({ funnel }: FunnelProps) => {
  if (!funnel.data) {
    return (
      <Card className="flex items-stretch w-full">
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
