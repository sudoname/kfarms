import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        gold: {
          DEFAULT: "#E5C068",
          50: "#FCF9F1",
          100: "#F8F0DD",
          200: "#F0E1BB",
          300: "#E8D299",
          400: "#E0C377",
          500: "#E5C068",
          600: "#D4A83D",
          700: "#B38E2E",
          800: "#92741F",
          900: "#715A10",
        },
        earth: {
          DEFAULT: "#3A3226",
          50: "#F4F2EF",
          100: "#E3DED7",
          200: "#C7BDAF",
          300: "#AB9C87",
          400: "#8F7B5F",
          500: "#735A37",
          600: "#5C482C",
          700: "#453621",
          800: "#2E2416",
          900: "#17120B",
        },
        green: {
          DEFAULT: "#2D4A2B",
          50: "#F2F5F2",
          100: "#DEE5DD",
          200: "#BDCBBB",
          300: "#9CB199",
          400: "#7B9777",
          500: "#5A7D55",
          600: "#486444",
          700: "#364B33",
          800: "#243222",
          900: "#121911",
        },
        cream: {
          DEFAULT: "#F7F3EA",
          50: "#FDFCF8",
          100: "#F7F3EA",
          200: "#EFE8D8",
          300: "#E5DAC2",
        },
        ink: {
          DEFAULT: "#1B2A1B",
          soft: "#3A4A38",
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
