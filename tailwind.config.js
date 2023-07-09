/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: [
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
			padding: "2rem"
		},
		fontFamily: {
			logo: ["Pasajero"]
		},
		extend: {
			colors: {
				secondaryColor: "#14213d",
				mainColor: "#fca311"
			}
		}
	},
	plugins: []
};
