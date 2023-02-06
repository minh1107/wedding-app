/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "text-normal": '#FEFFFF',
        'text-hover': '#20c997'
      },
      backgroundColor: {
        "header-color": "#1E7B67",
      },
    },
  },
  plugins: [],
};
