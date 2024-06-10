/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-header-footer": "var(--bg-header-footer)",
        "bg-page-color": "var(--bg-page-color)",
        "white-color": "var(--white-color)",
        "font-family-color": "var(--font-family-color)",
        "dark-gray": "rgb(60, 60, 60)",
        "secondary-color": "var(--secondary-color)",
        "darkgreen-color": "var(--darkgreen-color)",
        "red-color": "var(--red-color)",
        "light-bg": "var(--light-bg)",
        "darker-secondary": "var(--darker-secondary)",
        "light-secondary": "var(--light-secondary)",
        "lighter-secondary": "var(--lighter-secondary)",
        "lighter-primary": "var(--lighter-primary)",
        "darker-primary": "var(--darker-primary)",
        "light-gray": "var(--light-gray)",
        "dark1-gray": "var(--dark-gray)"

      },
      fontFamily: {
        "main-font": ["Chicle", "serif"],
        "general-font": ["Open Sans", "sans-serif"],
      },
      // Extend screens for custom media query
      screens: {
        xs: { max: "350px" },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
};
