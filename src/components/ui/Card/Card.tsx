import { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className="emboss-effect drop-shadow-2xl relative bg-slate-900 rounded-xl px-8 py-4">{children}</div>
}
