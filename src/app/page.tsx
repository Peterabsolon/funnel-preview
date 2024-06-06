import { FunnelPreview, Page } from '~/components'
import { FUNNEL_DATA_EXAMPLE } from '~/data.temp'

export default function Home() {
  return (
    <Page title="Funnel preview">
      <main>
        <FunnelPreview funnel={FUNNEL_DATA_EXAMPLE} />
      </main>
    </Page>
  )
}
