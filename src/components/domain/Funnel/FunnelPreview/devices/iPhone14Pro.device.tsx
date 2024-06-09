import { ReactNode } from 'react'

type Props = {
  bgColor?: string
  children: ReactNode
  theme: 'light' | 'dark'
}

// 1336
// 2686

export const IPhone14ProDevice = ({ children, bgColor }: Props) => {
  return (
    <div
      className="relative bg-cover"
      style={{
        backgroundImage: `url("/devices/iPhone 14 Pro Space Black, light theme@3x.png")`,
        width: 1336 / 3,
        height: 2686 / 3,
        padding: '81px 26px 156px 26.5px',
      }}
    >
      {/* Screen */}
      <div
        className="no-scrollbar overflow-y-auto"
        style={{
          backgroundColor: bgColor,
          width: '100%',
          height: '100%',
          aspectRatio: 393 / 852,
        }}
      >
        {/* Viewport */}
        <div className="content overflow-auto p-3">{children}</div>
      </div>
    </div>
  )
}
