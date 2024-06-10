import type { Config } from 'tailwindcss'

const PALETTE_BLUE = {
  100: '#72DCFF',
  200: '#49C2FF',
  300: '#20A0FF',
  400: '#007aff',
  500: '#005BE9',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: PALETTE_BLUE,
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
}
export default config
