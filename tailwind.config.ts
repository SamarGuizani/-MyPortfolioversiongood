import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "orbit-1": {
          "0%": { transform: "rotate(0deg) translateX(120px)" },
          "100%": { transform: "rotate(360deg) translateX(120px)" },
        },
        "orbit-2": {
          "0%": { transform: "rotate(72deg) translateX(100px)" },
          "100%": { transform: "rotate(432deg) translateX(100px)" },
        },
        "orbit-3": {
          "0%": { transform: "rotate(144deg) translateX(140px)" },
          "100%": { transform: "rotate(504deg) translateX(140px)" },
        },
        "orbit-4": {
          "0%": { transform: "rotate(216deg) translateX(90px)" },
          "100%": { transform: "rotate(576deg) translateX(90px)" },
        },
        "orbit-5": {
          "0%": { transform: "rotate(288deg) translateX(110px)" },
          "100%": { transform: "rotate(648deg) translateX(110px)" },
        },
        "orbit-6": {
          "0%": { transform: "rotate(360deg) translateX(130px)" },
          "100%": { transform: "rotate(720deg) translateX(130px)" },
        },
        "particle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-reverse": "spin-reverse 15s linear infinite",
        "orbit-1": "orbit-1 12s linear infinite",
        "orbit-2": "orbit-2 10s linear infinite",
        "orbit-3": "orbit-3 14s linear infinite",
        "orbit-4": "orbit-4 8s linear infinite",
        "orbit-5": "orbit-5 16s linear infinite",
        "orbit-6": "orbit-6 18s linear infinite",
        "particle-float": "particle-float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
