module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary_07': '#164C7E',
        'Primary_04': '#3C9AE8',
        'Secondary_04': '#E89A3C',
        'BW_02': '#EFF1F5',
      },
    },
  },
  plugins: [ require('@tailwindcss/typography'), require("tailwindcss-animate"), require("tailwindcss-animate")],
}
