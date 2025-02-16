"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export function WhyChooseUs(): React.JSX.Element {
  return (
    <Box sx={{ backgroundColor: "background.level2" }}>
      <Box sx={{ py: { lg: 12, md: 9, sm: 9, xs: 9 }, color: "#fff" }}>
        <Grid
          container
          columnGap={1}
          justifyContent={{
            lg: "space-between",
            md: "space-between",
            sm: "center",
            xs: "center",
          }}
          sx={{
            px: { lg: 15, md: 10, sm: 5, xs: 1 },
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          }}
        >
          {/* Left Section */}
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            sx={{
              textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
              mb: { lg: 0, sm: 3, xs: 3 },
            }}
          >
            <Typography
              variant="subtitle2"
              color="primary.contrastText"
              sx={{ fontWeight: 600 }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "3.25rem",
                  md: "2.75rem",
                  sm: "2.5rem",
                  xs: "2.5rem",
                },
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: -0.5,
                wordSpacing: -0.8,
                mt: 2,
                pr: { md: 4, xs: 0 },
              }}
            >
              Track your crypto portfolio in the best way possible
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, letterSpacing: -0.5 }}>
              Mean if he they been no hold mr. Is at much do made. Latter person
              am secure of estate genius at.
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: 3.5,
              mt: 8,
            }}
          >
            {["Enter Email", "Password"].map((item) => (
              <TextField
                key={item}
                placeholder={item}
                sx={{
                  mx: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "5px",
                    borderColor: "#fff",
                    backgroundColor: "#F2F3F4",
                    opacity: 0.2,
                    height: 65,
                  },
                  "& fieldset": { border: "none" },
                }}
                InputProps={{
                  sx: {
                    color: "#fff",
                    fontSize: "18px",
                    height: 55,
                    width: { lg: 380, md: 320, sm: 330, xs: 270 },
                  },
                }}
              />
            ))}
            <Button
              sx={{
                color: "#fff",
                fontWeight: 700,
                textTransform: "uppercase",
                backgroundColor: "#F57059",
                py: 2,
                width: { lg: 380, md: 320, sm: 330, xs: 270 },
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
