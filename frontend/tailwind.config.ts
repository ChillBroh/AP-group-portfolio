import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--color-primary-light)",
          base: "var(--color-primary-base)",
          base2: "var(--color-primary-base2)",
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
