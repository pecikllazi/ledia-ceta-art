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
        // Sea-inspired blue palette
        'sea-deep': '#0D2137',
        'sea-dark': '#1A3A5C',
        'sea-medium': '#2E5984',
        'sea-bright': '#3B82B6',
        'sea-light': '#7EC8E3',
        'sea-pale': '#B5E2F4',
        'sea-foam': '#E0F4FC',

        // Accent colors
        'coral': '#FF6B6B',
        'sand': '#F4D35E',
        'sunset': '#FF8C42',

        // Neutral colors
        'off-white': '#F8FAFC',
        black: '#0F172A',
        charcoal: '#1E293B',
        'warm-gray': '#E2E8F0',
        'cool-gray': '#CBD5E1',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#94A3B8',
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
        'sea-gradient': 'linear-gradient(135deg, #0D2137 0%, #2E5984 50%, #7EC8E3 100%)',
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%237EC8E3' fill-opacity='0.2' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'sea': '0 10px 40px -10px rgba(46, 89, 132, 0.3)',
        'sea-lg': '0 20px 60px -15px rgba(46, 89, 132, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
