import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      rotate: {
        'y-0': '0deg',
        'y-180': '180deg',
      },
    },
    borderRadius: {
      'lg': '0.7rem',
    }
  },
  plugins: [],
} satisfies Config

