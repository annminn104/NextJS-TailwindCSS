/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "am-mcolor": "#276678",
        "am-pcolor": "#1687A7",
        "am-scolor": "#D3E0EA",
        "am-bgcolor": "#F6F5F5",
      },
    },
  },
  plugins: [],
};
