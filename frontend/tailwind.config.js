/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        'gray-light': 'var(--gray-light)',
        'gray-dark': 'var(--gray-dark)',
        red: 'var(--red)',
        sage: 'var(--sage)',
        stone: 'var(--stone)',
        mint: 'var(--mint)',
        aloe: 'var(--aloe)',
        white: 'var(--white)',
      },
      fontFamily: {
        'main-font': ['Chicle', 'serif'],
        'general-font': ['Open Sans', 'sans-serif'],
      },
      // Extend screens for custom media query
      screens: {
        xs: { max: '350px' },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
};
