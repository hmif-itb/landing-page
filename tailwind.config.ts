import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        StretchPro: ["Stretch-Pro", "Poppins"],
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        xl: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      filter: {
        "5px": "5px",
      },
      zIndex:{
        "2" : "2",
        "3" : "3",
        "4" : "4"
      },
      boxShadow:{
        "1xl" : "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
      },
      minHeight:{
        "1/2" : "50%",
        "1/4" : "25%",
        "3/4" : "75%",
      },
      borderRadius:{
        "30px" : "30px",
        "20px" : "20px"
      },
      height:{
        "7/8" :"87%"
      },
      borderWidth:{
        "0.7" : "0.7px"
      }
    },
  },
  plugins: [],
};
export default config;
