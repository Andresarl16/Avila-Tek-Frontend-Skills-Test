import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors //
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F9FAFB",
        "bg-brand-section": "#53389E",
        "bg-button-primary": "#7F56D9",
        "bg-button-secondary": "#FFFFFF",

        // Text Colors //
        "text-primary": "#101828",
        "text-tertiary": "#475467",
        "text-brand-primary": "#FFFFFF",
        "text-brand-secondary": "#E9D7FE",
        "text-brand-tertiary": "#E9D7FE",
        "text-placeholder": "#667085",
        "text-button-primary": "#FFFFFF",
        "text-button-secondary": "#344054",
        "text-button-tertiary": "#6941C6",

        // Border Colors //
        "border-primary": "#D0D5DD",
        "border-secondary": "#EAECF0",
        "border-button-primary": "#7F56D9",
        "border-button-secondary": "#D0D5DD",

        // Utility //
        "utility-brand-50": "#F9F5FF",
        "utility-brand-200": "#E9D7FE",
        "utility-brand-700": "#6941C6",
      },
      height: {
        100: "25rem",
        112: "28rem",
      },
    },
  },
  plugins: [],
};
export default config;
