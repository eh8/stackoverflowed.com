/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      }
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
      mono: ['Fira Code', 'monospace'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}