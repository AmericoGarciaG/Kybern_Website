import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0f172a", // slate-900
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#22c55e", // green-500
                    foreground: "#020617",
                },
                slate: {
                    50: "#F8FAFC",
                    900: "#0f172a",
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
};
export default config;
