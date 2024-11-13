import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-evo-banner': "url('/bg-home-evo-banner.jpg')",
        'contact-banner': "url('/contact-banner.jpg')",
      },
      keyframes: {
        marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
        },
    },
    animation: {
        marquee: 'marquee 15s linear infinite',
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: '#BF211E',
        flash: '#EEF0F2',
        night: '#141414',

      },
    },
  },
  plugins: [],
} satisfies Config;
