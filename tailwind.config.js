/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      mono: ['ui-monospace','Menlo','Monaco','Consolas', 'monospace'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}