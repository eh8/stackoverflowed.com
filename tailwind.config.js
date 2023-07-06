/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Consolas', 'monospace'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}