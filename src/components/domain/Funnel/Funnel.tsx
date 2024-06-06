'use client'

import { useState } from 'react'

import { Card } from '~/components/ui/Card'
import { Button } from '~/components/ui/Button'
import * as T from '~/types'

import { FunnelPreview } from '../FunnelPreview'

export interface FunnelProps {}

export const Funnel = ({}: FunnelProps) => {
  const [data] = useState<T.Funnel>()

  if (!data) {
    return (
      <Card>
        <Button>Upload funnel data</Button>
      </Card>
    )
  }

  return <FunnelPreview funnel={data} />
}
