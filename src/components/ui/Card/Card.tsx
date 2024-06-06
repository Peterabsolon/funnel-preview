import { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className="rounded-sm">{children}</div>
}
