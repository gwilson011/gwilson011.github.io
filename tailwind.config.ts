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
                darkBlue: "#23455c",
                navGrey: "#7f94a1",
                purp: "#713A8A",
                lightGrey: "#c0d5e3",
                lightBlue: "#dff2ff",
                projectCard: "#c4daea",
            },
            fontFamily: {
                sans: [
                    "TangoSans",
                    "LouisGeorgeCafe",
                    "LouisGeorgeCafe-Bold",
                    "LouisGeorgeCafe-BoldItalic",
                    "LouisGeorgeCafe-LightItalic",
                    "LouisGeorgeCafe-Italic",
                ],
            },
        },
    },
    plugins: [],
};
export default config;
