const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "heading-1": "48px",
        "heading-2": "36px",
        "heading-3": "24px",
        "heading-4": "18px",
        "heading-5": "14px",
        "heading-6": "12px",
      },
      colors: {
        primary: {
          black: "#1B1E2A",
          purple: "#AB52F3",
          gray: "#878787",
        },
        secondary: {
          black: "#262D3A",
          purple: "#6763FD;",
        },
      },
    },
  },
  plugins: [],
};
