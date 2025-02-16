import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  body1: { fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.5 },
  body2: { fontSize: "1.1rem", fontWeight: 400, lineHeight: 1.57 },
  button: { fontWeight: 500 },
  caption:{ fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.5,"@media (max-width:1024px)": {
      fontSize: "1rem",
    }, },
  subtitle1: {
    fontSize: "1.40rem",
    fontWeight: 500,
    lineHeight: 1.57,
    "@media (max-width:1024px)": {
      fontSize: "1.1rem",
    },
    "@media (max-width:425px)": {
      fontSize: "1rem",
    },
  },
  subtitle2: { fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.57 },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.5px",
    lineHeight: 2.5,
    textTransform: "uppercase",
  },
  h1: {
    fontSize: "3.75rem",
    fontWeight: 700,
    lineHeight: 1.4,
    "@media (max-width:1024px)": {
      fontSize: "3rem",
    },
    "@media (max-width:425px)": {
      fontSize: "2rem",
    },
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1.2,
    "@media (max-width:600px)": {
      fontSize: "2.5rem",
    },
  },
  h3: {
    fontSize: "2.30rem",
    fontWeight: 900,  
    lineHeight: 1.2,
    "@media (max-width:600px)": {
      fontSize: "2rem",
    },
  },
  h4: {
    fontSize: "2.25rem",
    fontWeight: 700,
    lineHeight: 1.2,
    "@media (max-width:1024px)": {
      fontSize: "2rem",
    },
  },
  h5: {
    fontSize: "1.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    "@media (max-width:600px)": {
      fontSize: "1.3rem",
    },
  },
  h6: {
    fontSize: "1.125rem",
    fontWeight: 700,
    lineHeight: 1.2,
    "@media (max-width:600px)": {
      fontSize: "1rem",
    },
  },
} satisfies TypographyOptions;
