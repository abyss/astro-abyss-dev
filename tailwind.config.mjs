/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#12121a',
        'surface-2': '#1a1a26',
        gold: '#c9a84c',
        'gold-light': '#e2c47a',
        'gold-dim': '#8a7035',
        purple: '#6b4fa0',
        'purple-light': '#9b7fd4',
        'purple-dark': '#3d2d68',
        navy: '#1a1f3a',
        'text-primary': '#f0ece4',
        'text-secondary': '#a09880',
        'text-muted': '#5a5548',
      },
      fontFamily: {
        display: ['"Cormorant Garant"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.05' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
