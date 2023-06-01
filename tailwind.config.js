/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      borderRadius:{
        '4xl': '2.5rem'
      }
    },
  },
  plugins: [],
}

