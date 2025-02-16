import { extendTheme } from "@mui/material";
import { Theme } from "./types";
import { colorSchemes } from './color-schemes';
import { typography } from './typography';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground{
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  }

  interface TypeText{
    level1: string;
    level2: string;
    level3: string;
    level4: string;
  }

}
export function createTheme():Theme {
  let theme = extendTheme({
    // breakpoints:{values: {xs:0,sm:600,md:900,lg:1200,xl:1440}},
    colorSchemes,
    typography,
  });
  return theme;
}