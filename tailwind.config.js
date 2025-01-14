/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "green",
        secondary: "grey",
      },
      borderRadius: {
        button: "8px",
      },
      padding: {
        buttonX: "1.5rem",
        buttonY: "0.75rem",
      },
    },
  },
  plugins: [],
};
