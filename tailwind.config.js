/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0,0%,9%)",
        foreground: "hsl(0,0%,15%)",
        darken: {
          0.1: "hsla(0,0%,0%,0.1)",
          0.2: "hsla(0,0%,0%,0.2)",
          0.3: "hsla(0,0%,0%,0.3)",
          0.4: "hsla(0,0%,0%,0.4)",
          0.5: "hsla(0,0%,0%,0.5)",
          0.6: "hsla(0,0%,0%,0.6)",
          0.7: "hsla(0,0%,0%,0.7)",
          0.8: "hsla(0,0%,0%,0.8)",
          0.9: "hsla(0,0%,0%,0.9)",
        },
        lighten: {
          0.025: "hsla(0,0%,100%,0.025)",
          0.05: "hsla(0,0%,100%,0.05)",
          0.1: "hsla(0,0%,100%,0.1)",
          0.15: "hsla(0,0%,100%,0.2)",
          0.2: "hsla(0,0%,100%,0.2)",
        },
        text: "hsl(0,0%,100%)",
        textSecondary: "hsl(0,0%,60%)",
        primary: "hsl(151, 75%, 50%)",
        secondary: "hsl(341, 75%, 50%)",
        buttonHoverPrimary: "hsla(151, 75%, 50%, 0.25)",
        buttonHoverSecondary: "hsla(341, 75%, 50%, 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-gothic-a1)"],
        code: ["var(--font-fira-code)"],
      },
      aspectRatio: {
        "4/5": "4 / 5",
      },
      keyframes: {
        profile: {
          "50%": {
            transform: "translateY(-0.75rem) translateX(0.5rem)",
          },
        },
      },
      animation: {
        profile: "profile 6s ease-in-out infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
