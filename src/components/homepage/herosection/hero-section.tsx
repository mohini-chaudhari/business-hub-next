import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../header/header";
import { MainTitle } from "./main-title";

export function HeroSection(): React.JSX.Element {
  return (
    <>
      <Box sx={{ position: "relative" }}>
      <Box
          component={'img'}
          src="assets/Background.png"
          sx={{
            position:'absolute',
            top:0,
            zIndex:0,
            height:{lg:'750px',md:'630px',sm:'500px',xs:'500px'},
            width:{lg:'850px',md:'650px',sm:'500px',xs:'300px'}
          }}
        />
        <Box sx={{ zIndex: 10 }}>
          <Header />
        </Box>
        
        <Box
          component={"img"}
          src="assets/HeroImage.svg"
          sx={{
            display: { lg: "block", md: "block", sm: "none", xs: "none" },
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 0,
            width: { lg: "790px", md: "591px" },
            height: { lg: "800px", md: "600px" },
          }}
        />
        <Box sx={{ px: 0,position:'relative'}}>
          <Grid container >
            <Grid lg={6} md={7} sm={12} xs={12}>
              <Box sx={{ pl: { lg: 13, md: 10 }, pt: { lg: 12, md: 6,sm:3,xs:3 },px:{sm:5,xs:2} }}>
                <MainTitle />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
