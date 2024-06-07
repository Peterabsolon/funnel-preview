import React from 'react'
import type { Preview } from '@storybook/react'

import { font } from '../src/app/font'
import '../src/app/store'
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
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#020617', // bg-slate-950
        },
        // {
        //   name: 'facebook',
        //   value: '#3b5998',
        // },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
