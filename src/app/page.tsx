import { Funnel, Page } from '~/components'

export default function Home() {
  return (
    <Page title="Funnel preview">
      <main>
        <div className="flex min-h-96 gap-5">
          <Funnel />
          <Funnel />
          <Funnel />
          <Funnel />
        </div>
      </main>
    </Page>
  )
}
