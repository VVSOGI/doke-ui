import { ThemeConfig } from "tailwindcss/types/config";

interface Typography {
  fontSize: ThemeConfig["fontSize"];
  fontFamily: ThemeConfig["fontFamily"];
}

export const typography: Typography = {
  fontSize: {
    0: ["0.85rem", { lineHeight: "1rem" }],
    1: ["1rem", { lineHeight: "1.25rem" }],
    2: ["1.25rem", { lineHeight: "1.5rem" }],
    3: ["1.5rem", { lineHeight: "2rem" }],
    4: ["2rem", { lineHeight: "2.5rem" }],
    5: ["2.5rem", { lineHeight: "3rem" }],
    6: ["3rem", { lineHeight: "3.5rem" }],
  },

  fontFamily: {},
};
