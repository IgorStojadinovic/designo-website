/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        "light-peach": "#FFAD9B",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5",
        "pattern-bg": "#5D0202",
        figure: "#FDF3F0",
      },
      fontSize: {
        h1: "3rem",
        h2: "2.5",
        h3: "1.563",
        sm: "32px",
      },
      lineHeight: {
        "leading-6-5": "1.625rem",
        "leading-11": "3rem",
      },
      gridTemplateColumns: {
        "large-card": "repeat(auto,350px)",
      },
      backgroundImage: {
        "pattern-cta-desktop": "url('./src/assets/images/shared/desktop/bg-pattern-call-to-action.svg')",
      }
    },
    plugins: [],
  },
};
