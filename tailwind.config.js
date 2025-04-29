/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        // ...existing code...
      },
      colors: {
        'primary': '#1A1D23',
        'primary-light': '#21252C',
        'secondary': '#1E2228',
        'accent': '#C778DD',
        'accent-light': '#D89EE6',
        'accent-dark': '#A155B9',
        'text': '#FFFFFF',
        'text-secondary': '#ABB2BF',
        'text-tertiary': '#888DA3',
        'border': '#30363D',
        'border-light': '#4A5058',
        'success': '#8CEA95',
        'warning': '#F1CA7E',
        'error': '#FF6B6B',
        'info': '#61AFEF',
        'tech': {
          'bg': '#2D323A',
          'text': '#E8EAED',
          'border': '#444A54',
        },
      },
      fontFamily: {
        'fira': ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'custom': '0 4px 20px -2px rgba(0,0,0,0.2)',
        'card': '0 10px 30px -15px rgba(0,0,0,0.3)',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}
