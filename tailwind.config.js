/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"], // Ensure correct file path
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

