/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      display: ['group-hover'],
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

