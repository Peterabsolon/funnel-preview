import { Button, Logo } from '~/components'

export const Header = () => {
  return (
    <header className="p-8 flex items-center justify-between">
      <div className="flex items-center">
        <Logo className="mr-4" />
        <h3 className="font-medium">Funnel Preview</h3>
      </div>

      <div className="flex gap-4">
        <Button variant="secondary">Sync devices toggle</Button>
        <Button variant="secondary">Reset</Button>
      </div>
    </header>
  )
}
