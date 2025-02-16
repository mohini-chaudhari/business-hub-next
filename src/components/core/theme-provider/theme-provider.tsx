"use client";
import { createTheme } from "@/styles/theme/create-theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import EmotionCache from './emotion-cache';

import React from "react";

export interface ThemeProviderProps {
  children: React.ReactNode;
}
export function ThemeProvider({
  children
}: ThemeProviderProps): React.JSX.Element {
  const theme = createTheme();
  return (
    <EmotionCache options={{key:'mui'}}>
          <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
    </EmotionCache>
  );
}
