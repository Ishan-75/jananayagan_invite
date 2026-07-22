/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0F1115",
        void2: "#151822",
        gold: "#F4C542",
        rose: "#F6B7C9",
        cream: "#FFF8F2",
        accent: "#FF6B81",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(244,197,66,0.25)",
        glowRose: "0 0 40px rgba(246,183,201,0.25)",
        glowAccent: "0 0 50px rgba(255,107,129,0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "float 10s ease-in-out infinite",
        spinSlow: "spin 8s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6, filter: "blur(20px)" },
          "50%": { opacity: 1, filter: "blur(28px)" },
        },
      },
    },
  },
  plugins: [],
};