import { ColorSystemOptions } from "@mui/material";
import { ColorScheme } from "./types";
export const colorSchemes = {
  light: {
    palette: {
      background: {
        default: "var(--mui-palette-common-white)",
        defaultChannel: '12 12 12',
        level1: "#F5F8FF",
        level2: "#05796B",
        level3: "#F8F9FD",
        level4: "#E9ECF2",
      },
      common: { black: "#000000", white: "#ffffff" },
      primary: {
        main: "#4F46BA",
        dark: "#3734A9",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#00E1F0",
        dark: "#F57059",
        light: "#1B1C31",
      },
      error: {
        light: "#FF5656",
        main: "#FF1E1E",
        dark: "#BF1616",
        contrastText: "#FFFFFF",
      },
      text: {
        primary: "#000000",
        secondary: "#757095",
        level1: "#64607D",
        level2: "#16012C",
        level3: "#1B1C31",
        level4: "#1D1D3E",
      },
      divider:'#E5E5EA'
    },
  },
} satisfies Partial<Record<ColorScheme, ColorSystemOptions>>;
