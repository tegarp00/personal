/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
		fontFamily: {
      'sans': ['Fira Code'],
      'serif': ['Fira Code'],
      'mono': ['Fira Code'],
      'display': ['Fira Code'],
      'body': ['Fira Code']
		}
	},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
