import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Palette
        ink: '#1a1a1a',
        charcoal: '#2d2d2d',
        stone: '#4a4a4a',
        'warm-gray': '#8a8a8a',
        silver: '#b5b5b5',
        cloud: '#e8e8e8',
        cream: '#f5f5f3',
        paper: '#fafaf9',

        // Ocean Accents (subtle, sophisticated)
        ocean: '#1e3a4c',
        'deep-sea': '#0f2027',
        teal: '#2d4a54',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Karla', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1' }],
        'display-lg': ['4rem', { lineHeight: '1.1' }],
        'display-md': ['3rem', { lineHeight: '1.15' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
};

export default config;
