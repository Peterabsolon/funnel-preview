import { Funnel } from '~/components'

export default function Home() {
  return (
    <div className="flex flex-1 justify-center gap-8">
      <div className="flex items-stretch w-full max-w-[520px]">
        <Funnel />
      </div>
    </div>
  )
}
