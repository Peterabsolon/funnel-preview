'use client'

import { useState } from 'react'

import { Card } from '~/components/ui'
import { Dropzone } from '~/components/fields'
import { CodeBracketIcon } from '~/components/icons'
import * as T from '~/types'

import { FunnelPreview } from '../FunnelPreview'

export interface FunnelProps {}

export const Funnel = ({}: FunnelProps) => {
  const [data] = useState<T.Funnel>()

  // localStorage...
  // const previouslyUploadedData: any[] = []

  if (!data) {
    return (
      <Card className="flex items-stretch w-full">
        <Dropzone
          label="Drop JSON files here or click to select from drive"
          accept={{ 'application/json': ['.json'] }}
          onDrop={(files) => console.log({ files })}
          icon={<CodeBracketIcon className="text-slate-700 w-24 mb-4" />}
        />
      </Card>
    )
  }

  return <FunnelPreview funnel={data} />
}
