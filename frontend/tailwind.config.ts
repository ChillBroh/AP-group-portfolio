import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        cmd: "910px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
      },
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          base: "var(--color-primary-base)",
          base1: "var(--color-primary-base2)",
        },
        secondary: {
          light: "var(--color-secondary-light)",
          base: "var(--color-secondary-base)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
