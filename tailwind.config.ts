import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at top right, #292442, #1d1b27)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        app_bg: '#yourColorCode',
      },
    },
  },
  plugins: [],
} satisfies Config;
