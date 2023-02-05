module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Averia Serif Libre", "sans-serif"],
      },
      colors: {
        bcream: "#FFF7ED",
        bblue: "#023047",
        borange: "#FB8500",
        blblue: "#9CB4C1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
