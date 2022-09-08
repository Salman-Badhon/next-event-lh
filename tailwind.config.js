/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lh-yellow": "#FFC93E",
        "lh-brown": "#725114",
        "lh-blue": "#111D5E",
        "lh-black": "#0A142F",
      },
    },
  },
  plugins: [],
};
