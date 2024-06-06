import cx from 'classnames'

export interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return <img className={cx('w-8', className)} alt="Perspective.co logo" src="/perspective.png" />
}
