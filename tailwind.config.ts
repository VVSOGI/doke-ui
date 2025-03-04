import type { Config } from "tailwindcss";
import { colors, layout, typography } from "./design";

export default {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors,
    spacing: layout.spacing,
    fontSize: typography.fontSize,

    extend: {
      width: layout.width,
      maxWidth: layout.width,
      minWidth: layout.width,

      height: layout.height,
      minHeight: layout.height,
      maxHeight: layout.height,
    },
  },
  plugins: [],
} satisfies Config;
