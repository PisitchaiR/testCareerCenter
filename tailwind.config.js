const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#2B68E8",
        "color-place": "#99999F",
        "color-bg": "#F5F5F5",
        "color-link":"#F26721"
      },
      fontFamily: {
        kanit: ["Kanit", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        spinZ: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          "base-100": "#F5F5F5",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
