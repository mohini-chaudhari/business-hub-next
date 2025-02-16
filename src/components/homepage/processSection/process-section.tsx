"use client";
import { Box, styled } from "@mui/material";
import React from "react";
import { ProcessHeading } from "./process-head";
import { ProcessDescription } from "./process-description";
import { Product } from "./product";
import { Promotion } from "./promotion";

export function ProcessComponent(): React.JSX.Element {
  const Image = styled("img")``;
  return (
    <>
      <Box sx={{ px: "0px", position: "relative" }}>
        <Image
          src="assets/Ellipsesvg.svg"
          sx={{ zIndex: 0, position: "absolute", top: "-2%" ,display:{md:'flex',xs:'none'}}}
        />
        <Image
          src="assets/Ellipsesvg.svg"
          sx={{
            position: "absolute",
            zIndex: 0,
            top: "-2%",
            right: 0,
            transform: "rotate(180deg)",
            display:{md:'flex',xs:'none'}
          }}
        />
        <ProcessHeading />
        <ProcessDescription />
        <Product />
        <Promotion />
      </Box>
    </>
  );
}
