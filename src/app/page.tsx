import { FunnelPreview, Page } from '~/components'
import { FUNNEL_DATA_EXAMPLE } from '~/data.temp'

export default function Home() {
  return (
    <Page title="Home">
      <h1>Perspective.co</h1>

      <main>
        <FunnelPreview funnel={FUNNEL_DATA_EXAMPLE} />
      </main>
    </Page>
  )
}
