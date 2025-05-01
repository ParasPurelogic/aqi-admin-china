import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4BA9FF",
        para: "#677580",
        title: "#222D32",
        error: "#ED6767",
        online: "#63C367",
        offline: "#F96D6D",
      },
      spacing: {
        "body-padding": "var(--body-padding)",
      }
    },
  },
  plugins: [],
}
export default config