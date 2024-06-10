import '../src/assets/globals.css'

import React from 'react'
import type { Preview } from '@storybook/react'

import { font } from '../src/assets'
import '../src/app/store'

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
