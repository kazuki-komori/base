/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app.vue",
    "./components/**/*.{vue,js,jsx,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Docs: https://tailwindcss.com/docs/typography-plugin
    require("@tailwindcss/typography"),
    // Docs: https://daisyui.com/docs
    require("daisyui"),
  ],
}
