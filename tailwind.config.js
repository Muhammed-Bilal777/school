/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"custum-sky": "#05dbe9",
				"custom-purple": "#490D59",
				"custum-red": "#E8063C",
				"custum-green": "76AD1E",
				animation: {
					rotate: "rotate 3s linear infinite",
				},
				keyframes: {
					rotate: {
						"0%": { transform: "rotate(0deg)" },
						"100%": { transform: "rotate(360deg)" },
					},
				},
			},
		},
	},
	plugins: [],
};
