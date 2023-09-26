/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		'tailwind-scrollbar',
	],
	safelist: [
		"bg-green-400",
		"text-green-500",

		"bg-sky-400",
		"text-sky-500",

		"bg-purple-400",
		"text-purple-500",

		"bg-red-400",
		"text-red-500",

		"bg-yellow-400",
		"text-yellow-500",
	],
};
