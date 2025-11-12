/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f2f7ff',
          100: '#e1edff',
          200: '#c7dbff',
          300: '#9cbcfe',
          400: '#6b95fa',
          500: '#4a6ff2',
          600: '#3152e5',
          700: '#283fbd',
          800: '#233696',
          900: '#212f79',
          950: '#141c4a',
        },
        secondary: '#f97316',
        midnight: '#0f172a',
        ocean: '#38bdf8',
        mint: '#34d399',
      },
      boxShadow: {
        glow: '0 20px 45px -12px rgba(74, 111, 242, 0.35)',
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(circle at 1px 1px, rgba(74, 111, 242, 0.15) 1px, transparent 0)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(74, 111, 242, 0.95), rgba(56, 189, 248, 0.75))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.7s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

