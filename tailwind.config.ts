import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#5c2dd5',
        'light-purple': '#7945ff',
        pink: '#fd6687',
        yellow: '#ffce67',
      },
    },
  },
  plugins: [],
} as Config;
