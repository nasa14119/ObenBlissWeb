/** @type {import('tailwindcss').Config} */
import animations from "tailwindcss-animated"
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			primary : "#f5bb00ff",
			secundary: "#264653ff",
			accent: "#FAC54F",
			contrast :"#d76a03ff",
			extra: "#bf3100ff",
			violet: "#702632"
		}
	},
	plugins: [animations],
}
