// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      mob: { max: "639px" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ash: "#f5f5f5",
      white: "#ffffff",
      lightash: "#838282",
      midnightash: "#323131",
      purple: "#b845ff",
      borderLight: "#A1A1A1",
      dark: "#000000",
      extend: {},
    },
    extend: {},
  },
  plugins: [],
};
