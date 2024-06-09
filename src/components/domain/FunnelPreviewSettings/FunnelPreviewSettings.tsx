import { observer } from 'mobx-react-lite'

import { Toggle } from '~/components/fields'
import { Card, Pagination } from '~/components/ui'

import { FunnelStore } from '../FunnelPreview/FunnelPreview.store'

export interface FunnelPreviewSettingsProps {
  funnel: FunnelStore
}

export const FunnelPreviewSettings = observer(({ funnel }: FunnelPreviewSettingsProps) => {
  const { page, setPage } = funnel
  const { pages = [] } = funnel.data || {}

  return (
    <Card>
      <Toggle label="Device theme" checked={funnel.deviceTheme === 'dark'} onChange={funnel.toggleDarkTheme} />
      <Pagination page={page} setPage={setPage} pagesCount={pages.length} />
    </Card>
  )
})
