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
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0d2b4e',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1d20',
        },
        accent: {
          orange: '#f97316',
          'orange-light': '#fb923c',
          'orange-dark': '#ea580c',
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-dark': '#2563eb',
          green: '#10b981',
          'green-light': '#34d399',
          'green-dark': '#059669',
          purple: '#8b5cf6',
          'purple-light': '#a78bfa',
          'purple-dark': '#7c3aed',
          pink: '#ec4899',
          'pink-light': '#f472b6',
          'pink-dark': '#db2777',
          yellow: '#f59e0b',
          'yellow-light': '#fbbf24',
          'yellow-dark': '#d97706',
        },
      },
      boxShadow: {
        glow: '0 4px 20px -2px rgba(13, 43, 78, 0.15)',
        'glow-lg': '0 8px 30px -4px rgba(13, 43, 78, 0.2)',
        subtle: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(circle at 1px 1px, rgba(13, 43, 78, 0.08) 1px, transparent 0)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(13, 43, 78, 0.98), rgba(16, 42, 67, 0.95))',
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

