// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: "#3A5A40", // main green
            dark: "#2F4F3A",    // footer / dark header
            light: "#588157",   // hover / soft sections
          },
          yellow: {
            DEFAULT: "#E0C15A", // main accent yellow
            dark: "#C9A93B",    // hover / emphasis
            light: "#F2E3A1",   // subtle highlights
          },
          black: "#0F0F0F",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}
