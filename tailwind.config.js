/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "size-140px": "140px",
        "size-48px": "48px",
        "size-20px": "20px",
        "size-16px": "16px",
        "size-12px": "12px",
      },
      width: {
        32: "8.5rem",
      },
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
