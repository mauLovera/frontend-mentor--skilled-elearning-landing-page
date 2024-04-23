import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "heading-2xl": [
        "56px",
        {
          lineHeight: "71px",
          fontWeight: "800",
        },
      ],
      "heading-xl": [
        "40px",
        {
          lineHeight: "50px",
          fontWeight: "800",
        },
      ],
      "heading-lg": [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "800",
        },
      ],
      "heading-md-tall": [
        "24px",
        {
          lineHeight: "32px",
          fontWeight: "800",
        },
      ],
      "heading-md": [
        "24px",
        {
          lineHeight: "30px",
          fontWeight: "800",
        },
      ],
      "heading-base": [
        "20px",
        {
          lineHeight: "25px",
          fontWeight: "800",
        },
      ],
      "heading-sm": [
        "16px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      "heading-xs": [
        "14px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      "body-lg": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "500",
        },
      ],
      "body-base": [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "500",
        },
      ],
      "body-sm": [
        "14px",
        {
          lineHeight: "28px",
          fontWeight: "500",
        },
      ],
      "button-base": [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      "button-sm-tall": [
        "16px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      "button-sm": [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      pink: "hsl(341, 92%, 62%)",
      "pink-hover": "hsl(341, 100%, 83%)",
      blue: "hsl(233, 54%, 16%)",
      "blue-hover": "hsl(234, 25%, 52%)",
      gray: "hsl(232, 10%, 56%)",
    },
    gradientColorStops: {
      white: "hsl(0, 0%, 100%)",
      "light-blue": "hsl(234, 100%, 97%)",
      purple: "hsl(237, 100%, 64%)",
      "purple-hover": "hsl(265, 71%, 78%)",
      orange: "hsl(13, 100%, 64%)",
      "hot-pink": "hsl(322, 87%, 55%)",
    },
    extend: {
      screens: {
        xl: "1441px",
        md: "769px",
      },
    },
  },
  plugins: [],
}
export default config
