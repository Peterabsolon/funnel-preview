'use client'

import { observer } from 'mobx-react-lite'

import { Card } from '~/components/ui'
import { Dropzone } from '~/components/fields'
import { CodeBracketIcon } from '~/components/icons'

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
          label="Drop JSON files here or click to select from drive"
          acceptFilesPreset="JSON"
          onDrop={(files) => console.log({ files })}
          icon={<CodeBracketIcon className="text-slate-700 w-24 mb-6" />}
        />
      </Card>
    )
  }

  return <FunnelPreview funnel={funnel} />
})