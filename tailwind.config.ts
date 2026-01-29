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
        // Deep ocean blue-green palette (teal undertones)
        'sea-deep': '#0A1F2E',
        'sea-dark': '#0F3041',
        'sea-medium': '#1A5566',
        'sea-bright': '#1E7B7B',
        'sea-light': '#4DB6AC',
        'sea-pale': '#80CBC4',
        'sea-foam': '#B2DFDB',

        // Accent colors
        'coral': '#FF6B6B',
        'sand': '#F4D35E',
        'sunset': '#FF8C42',

        // Neutral colors
        'off-white': '#F0F5F4',
        black: '#0A1F2E',
        charcoal: '#1A2F3A',
        'warm-gray': '#D4E0DE',
        'cool-gray': '#B8C9C5',
        'text-primary': '#0A1F2E',
        'text-secondary': '#3D5A5A',
        'text-muted': '#6B8A8A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Times New Roman', 'serif'],
        sans: ['Libre Franklin', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'sea-gradient': 'linear-gradient(135deg, #0A1F2E 0%, #1A5566 50%, #4DB6AC 100%)',
      },
      boxShadow: {
        'sea': '0 10px 40px -10px rgba(26, 85, 102, 0.3)',
        'sea-lg': '0 20px 60px -15px rgba(26, 85, 102, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
