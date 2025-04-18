/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {
      secondary: "#3498DB",
      teal: "#1ABC9C",
      "gradient-primary": "linear-gradient(135deg, #3498DB 0%, #1ABC9C 100%)",
    },
  },
  plugins: [],
};
