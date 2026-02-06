import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dental: {
                    50: "#f5f7fa",  // Ultra light grey-blue (Backgrounds)
                    100: "#eaeef5",
                    200: "#ced9eb",
                    300: "#a3bce0",
                    400: "#729bd0",
                    500: "#4e7cc0", // Primary Accessible Blue
                    600: "#3a609e",
                    700: "#2f4d80",
                    800: "#284169", // Deep Navy
                    900: "#243755",
                    950: "#172336", // Almost Black Night Blue
                },
                accent: {
                    light: "#60ecfa", // Electric Cyan
                    DEFAULT: "#0ea5e9", // Sky Blue
                    dark: "#0284c7",
                },
                surface: {
                    white: "#ffffff",
                    off: "#fafafa",
                    glass: "rgba(255, 255, 255, 0.7)",
                    darkGlass: "rgba(23, 35, 54, 0.8)",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-inter)", "sans-serif"], // Could add a serif here later if requested
            },
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.7s ease-out forwards",
                "reveal": "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                reveal: {
                    "0%": { clipPath: "inset(0 100% 0 0)" },
                    "100%": { clipPath: "inset(0 0 0 0)" },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        plugin(function({ addUtilities }) {
            addUtilities({
                ".text-balance": {
                    "text-wrap": "balance",
                },
                ".clip-text-image": {
                    "background-clip": "text",
                    "-webkit-background-clip": "text",
                    "color": "transparent",
                }
            })
        })
    ],
};
export default config;
