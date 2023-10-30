import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {

          primary: "#6dedd5",

          secondary: "#6b4baa",

          accent: "#fcb8f9",

          neutral: "#14181f",

          "base-100": "#e2e0eb",

          info: "#557bd3",

          success: "#128768",

          warning: "#d06e06",

          error: "#fa0f1f",
          body: {
            "background-color": "#e3e6e6"
          }
        },
      },
    ],
  },
}
export default config
