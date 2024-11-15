/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        heading: "#513CF0",
		subHeading: "#84A8CA",
        cardTitle: "#3C60F0",
      },
    },
  },
  plugins: [],
};
// heading: "#513CF0",
// 		subHeading: "#84A8CA",
//         cardTitle: "#3C60F0",