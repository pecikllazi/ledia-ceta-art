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
        // Deep Ocean Palette
        ocean: {
          abyss: '#020817',
          deep: '#0a1628',
          midnight: '#0f2139',
          twilight: '#1a365d',
          current: '#234e82',
        },

        // Bioluminescent Accents
        biolum: {
          cyan: '#22d3ee',
          teal: '#2dd4bf',
          blue: '#60a5fa',
        },

        // Pearl & Iridescent
        pearl: {
          DEFAULT: '#f0f9ff',
          soft: 'rgba(240, 249, 255, 0.9)',
          muted: 'rgba(240, 249, 255, 0.6)',
          subtle: 'rgba(240, 249, 255, 0.3)',
        },

        // Coral Accents
        coral: {
          warm: '#fb7185',
          soft: '#fda4af',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        rise: 'rise 8s ease-in infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 200%' },
          '100%': { backgroundPosition: '-200% -200%' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(100%) scale(0.5)' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { opacity: '0', transform: 'translateY(-100vh) scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'ocean-gradient': 'linear-gradient(180deg, #020817 0%, #0f2139 50%, #020817 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(15, 33, 57, 0.8) 0%, rgba(26, 54, 93, 0.6) 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3), 0 0 40px rgba(34, 211, 238, 0.15)',
        'glow-teal': '0 0 20px rgba(45, 212, 191, 0.3), 0 0 40px rgba(45, 212, 191, 0.15)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
};

export default config;
