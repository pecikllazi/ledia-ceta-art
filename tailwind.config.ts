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
        white: '#FAFAFA',
        'off-white': '#F5F5F5',
        black: '#1A1A1A',
        charcoal: '#2D2D2D',
        'sea-deep': '#1E3A5F',
        'sea-medium': '#3D5A80',
        'sea-light': '#98C1D9',
        'warm-gray': '#E8E4E1',
        'cool-gray': '#D1D5DB',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Times New Roman', 'serif'],
        sans: ['Libre Franklin', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
