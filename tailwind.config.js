import typography from "@tailwindcss/typography";

/** @type { import('tailwindcss').Config } */
export default {
  content: ["./src/**/*.{html,js,svelte,ts,svx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
