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
        red: '#fd6687',
        yellow: '#ffce67',
      },
      borderWidth: {
        3: '3px',
        16: '16px',
      },
    },
    boxShadow: {
      brand: '0px 10px 0px #000000',
    },
  },
  plugins: [],
} as Config;
