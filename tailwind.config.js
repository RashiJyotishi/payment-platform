/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#2C3E50',
          secondary: '#3498DB',
          teal: '#1ABC9C',
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(135deg, #3498DB 0%, #1ABC9C 100%)',
        }
      },
    },
    plugins: [],
  }
  