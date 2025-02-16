"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";

export function Product(): React.JSX.Element {
  return (
    <>
      <Box
        sx={{
          background: " linear-gradient(180deg, #FFF 58%, #f5f8ff 42%)",
          margin: "auto",
          textAlign: "center",
          justifyContent: "center",
          display: { lg: "grid", md: "grid", sm: "grid", xs: "none" },
          gridTemplateColumns: "auto auto auto",
          gridTemplateRows: "auto auto auto",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: { lg: "flex", md: "flex", sm: "flex", xs: "flex-box" },
            flexDirection: "row",
            justifyContent: "center",
            zIndex: 1,
            textAlign: "center",
            margin: "auto",
            gridColumn: 2,
            gridRow: "1/span 2",
            background: "transparent",
          }}
        >
          <Box
            component={"img"}
            src={"assets/Product.svg"}
            position={"relative"}
            sx={{
              display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
              height: { lg: 400, md: 300, sm: 300, xs: 150 },
              zIndex: 0,
            }}
          />
          <Typography
            sx={{
              fontWeight: 700,
              position: {
                lg: "absolute",
                md: "absolute",
                sm: "absolute",
                xs: "static",
              },
              top: "25%",
              color: { lg: "primary.contrastText", sm: "#fff" },
              fontSize: { lg: "42px", md: "30px", sm: "30px", xs: "22px" },
            }}
          >
            Push your product to next level.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              position: {
                lg: "absolute",
                md: "absolute",
                sm: "absolute",
                xs: "static",
              },
              fontWeight: 400,
              px: { lg: 15, md: 12, sm: 10 },
              top: "43%",
              color: {
                lg: "primary.contrastText",
                md: "primary.contrastText",
                sm: "primary.contrastText",
                xs: "text.secondary",
              },
              fontSize: { lg: "21px", md: "16px", sm: "18px", xs: "15px" },
            }}
          >
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </Typography>
          <Button
            sx={{
              position: {
                lg: "absolute",
                md: "absolute",
                sm: "absolute",
                xs: "static",
              },
              top: "65%",
              textTransform:'none',
              fontWeight:700,
              color: "primary.contrastText",
              backgroundColor: "primary.dark",
              px: { lg: 5, md: 4, sm: 4, xs: 3 },
              py: { lg: 2, md: 1.8, sm: 1.5, xs: 1.5 },
              fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "13px" },
              borderRadius: "30px",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", lg: "none", md: "none", sm: "none" },
          flexDirection: "column",
          justifyContent:'center',
          alignItems:'center',
          px:4,
          pb:3,
          rowGap:3,
          width:'100%',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: "text.primary",
            lineHeight:1.2,
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Push your product to next level.
        </Typography>
        <Typography
        sx={{
          fontWeight: 400,
          color: 'text.level1',
          fontSize: '1.1rem',
          textAlign:'center'
        }}
        >
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </Typography>
        <Button
            sx={{
              textTransform:'none',
              fontWeight:700,
              color: "primary.contrastText",
              backgroundColor: "primary.dark",
              px: 3,
              py: 1.5 ,
              fontSize:  "13px",
              borderRadius: "30px",
            }}
          >
            Get Started
          </Button>
      </Box>
    </>
  );
}
