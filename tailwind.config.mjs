/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'heading': '#62706A',
				'cardTitle': '#6DB091'
			}
		},
	},
	plugins: [],
}
