import fireCMSConfig from "@firecms/ui/tailwind.config.js";
<<<<<<< HEAD
// not a TS file so below doesn't work
// @ts-ignore
// import type { Config } from "tailwindcss";

// const config: Config = {
const config = {
  presets: [fireCMSConfig],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/cms/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@firecms/**/*.{js,ts,jsx,tsx}"
  ]
};
export default config;
=======

export default {
    presets: [fireCMSConfig],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@firecms/**/*.{js,ts,jsx,tsx}"
    ],
};
>>>>>>> 9b49ca93 (firecms Community initial)
