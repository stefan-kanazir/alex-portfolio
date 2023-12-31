/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#1E51E1",
      dark: "#1E1E1E",
      white: "#FFFFFF",
      gray: "#323232",
      lightGray: "#E6E6E6",
      lightBlue: "#E1F6FF",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
