/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: "'Inter', sans-serif",
        title: "'Koulen', serif",
      },
      colors: {
        secondary: '#D9D9D9',
        accent: '#1E1E1E',
      },
      boxShadow: {
        main: '0px 4px 0px #000000;',
      },
    },
  },
  plugins: [],
}
