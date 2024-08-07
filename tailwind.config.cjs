/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'transparent': 'transparent',
			'current-color': 'currentColor',
			brand: {
				primary: '#0C1A9C',
				secondary: '#03A1D3',
				white: '#F7F5FB',
				gray: '#E1E3F3',
			},
			content: {
				primary: '#090E3C',
			}
		},
		extend: {},
	},
	plugins: [],
}
