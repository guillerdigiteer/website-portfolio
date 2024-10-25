/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {"space": ['Space Mono', 'monospace']},

      colors: {
        primary: '#1d4ed8',
        secondary: '#262626'
      },

      backgroundImage: {
        'hero': "url('../assets/Background.png')",
      }
    }
  },
  plugins: [],
}