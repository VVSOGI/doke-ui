import type { Config } from "tailwindcss";
import { colors, layout, typography } from "./design";
import { PluginAPI } from "tailwindcss/types/config";

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
  plugins: [
    function ({ addVariant }: PluginAPI) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
} satisfies Config;
