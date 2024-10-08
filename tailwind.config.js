/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "kumbh-sans": ['"Kumbh Sans"', "sans-serif"],
        "roboto-slab": ['"Roboto Slab"', "serif"],
        "space-mono": ['"Space Mono"', "monospace"],
      },
      colors: {
        "coral-red": "#F87070",
        "aqua-sky": "#70F3F8",
        "lavender-blush": "#D881F8",
        "pale-blue": "#D7E0FF",
        "faded-blue": "#E3E1E1",
        "midnight-blue": "#1E213F",
        "pure-white": "#FFFFFF",
        "soft-white": "#EFF1FA",
        "deep-navy": "#161932",
        "night-purple": "#2E325A",
        "midnight-purple": "#0E112A",
        "modal-bg": "rgba(10, 12, 28, 0.50)",
      },
    },
  },
  plugins: [],
};
