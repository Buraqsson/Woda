module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Degular: ["Degular"],
        Rustica: ["Rustica"],
      },
      colors: {
        "regal-blue": "#3703CC",
        "second-color": "#70BFBF",
        "third-color": "#F8FAFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
