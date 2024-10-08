import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' }, // Start off the right side of the viewport
          '100%': { transform: 'translateX(-100%)' }, // Move to the left side of the viewport
        },
      },
      animation: {
        'slide-left-right': 'slide 55s linear infinite',
      },
      fontSize: {
        'xxs': '0.5rem', // Extra extra small font size
      },
    },
  },
  plugins: [],
};
export default config;
