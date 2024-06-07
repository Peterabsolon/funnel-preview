import cx from 'classnames'
import { observer } from 'mobx-react-lite'

export interface LogoProps {
  className?: string
  withText?: boolean
}

export const Logo = observer(({ className, withText = true }: LogoProps) => {
  return (
    <div className="flex items-center">
      <img className={cx('w-8', className)} alt="Perspective.co logo" src="/perspective.png" />
      {withText && <h1 className="ml-4 font-medium">Funnel Preview</h1>}
    </div>
  )
})
