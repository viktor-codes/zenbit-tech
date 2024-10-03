/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		container: {
			padding: '2rem',
			center: true,
		},
		extend: {
			roboto: ['Roboto', 'sans-serif'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
