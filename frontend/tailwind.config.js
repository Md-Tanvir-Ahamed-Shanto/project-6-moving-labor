/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Default primary color
          light: '#3B82F6', // Light version
          dark: '#1E3A8A',  // Dark version
        },
        secondary:{
          DEFAULT: '#FF0000'
        }
      },
    },
  },
  plugins: [],
}