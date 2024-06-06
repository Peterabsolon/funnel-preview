import React from 'react'
import type { Preview } from '@storybook/react'

import { font } from '../src/app/font'
import '../src/app/globals.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={font.className}>
        <Story />
      </div>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
