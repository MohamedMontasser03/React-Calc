module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        display: "var(--color-display)",
        text: "var(--color-text)",
        "button-text": "var(--color-button-text)",
        "accent-text": "var(--color-accent-text)",
        "button-primary": "var(--button-primary)",
        "button-primary-border": "var(--button-primary-border)",
        "button-secondary": "var(--button-secondary)",
        "button-secondary-border": "var(--button-secondary-border)",
        "button-accent": "var(--button-accent)",
        "button-accent-border": "var(--button-accent-border)",
      },
      animation: {
        fade: "fadeOut 0.3s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: "0", transform: "translate(0, -2rem)" },
          "100%": { opacity: "1", transform: "translate(0, 0)" },
        },
      }),
    },
  },
  plugins: [],
};
