/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#46894C",
        whitey: "#F5F5F5",
        blackey: "#666666",
      },
      gridAutoRows: {
        cards: "240px 1fr",
      },
    },
  },
  plugins: [],
}
