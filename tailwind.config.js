/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
				},
			},
			colors: {
				primary: "#FFFFFF",
				primary1: "#363738",
				secondary: "#F5F5F5",
				secondary1: "#FEFAF1",
				secondary2: "#DB4444",
				bg: "#FFFFFF",
				text: "#FAFAFA",
				text1: "#7D8184",
				text2: "#000000",
				button: "#000000",
				button1: "#00FF66",
				button2: "#DB4444",
				hoverButtonRed: "#E07575",
				hoverButtonBlue: "#A0BCE0",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
