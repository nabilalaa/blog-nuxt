/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue"
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem"
			}
		},
		extend: {
			colors: {
				text: "#000000",
				background: "#e2ffdb",
				mainColor: "#0121b2",
				secondaryColor: "#ffffff",
				accent: "#b20121"
			}
		}
	},
	plugins: []
};
