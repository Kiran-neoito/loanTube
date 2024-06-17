module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins)"],
        sans: ["Source Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1A763A",
        secondary: "#1F8844",
        error: "#F21E1E",
        success: "#13C344",
        disabled: "#657C2F",
        charcoal: "#1F2430",
        "charcoal-70": "#616369",
        "charcoal-100": "#3B3243",
      },
      width: {
        98: "26.25rem",
        200: "50rem",
      },
      backgroundColor: {
        "button-primary":
          "radial-gradient(50% 96.43% at 50% 3.57%, #7B1C9E 0%, #5B1476 84.87%)",
        "button-disabled":
          "radial-gradient(50% 96.43% at 50% 3.57%, #A2C552 0%, #7B9D2E 80.19%)",
        onBoarding: "#F7F6F2",
      },
      lineHeight: {
        11: "2.625rem",
      },
      transitionProperty: {
        width: "width",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
