import type { Meta } from '@storybook/react'

import { ArrowIcon } from './Arrow.icon'
import { ChevronIcon } from './Chevron.icon'
import { CodeBracketIcon } from './CodeBracket.icon'
import { JSONIcon } from './JSON.icon'

const meta = {
  title: 'Icons',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta

const Template = () => {
  const className = 'w-10 h-10'

  return (
    <div className="flex gap-2">
      <ArrowIcon className={className} />
      <ChevronIcon className={className} />
      <CodeBracketIcon className={className} />
      <JSONIcon className="w-12" />
    </div>
  )
}

export const Default = Template.bind({})
