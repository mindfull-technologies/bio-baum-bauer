/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
    },
  },
  plugins: [require('flowbite/plugin')],
};
