/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
		fontFamily: {
			body: [
        'Fira Code'
      ]
		}
	},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
