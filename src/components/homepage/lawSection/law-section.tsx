"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { lawDesc, lawHead } from "./config";

export function LawSection(): React.JSX.Element {
  const Image = styled("img")``;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pt: 13,
          pb: 10,
        }}
      >
        <Box
          sx={{
            border: "1px solid",
            borderColor: "#DEE1E6",
            borderRadius: "15px",
            width: { lg: "auto", md: "auto", sm: 500, xs: 280 },
            mx: { lg: 13, md: 10 },
            py: 5,
          }}
        >
          <Grid container rowGap={2} columnGap={{ lg: "10px" }}>
            <Grid lg={4} md={4} sm={11} xs={12}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 650, textAlign: "start", px: 2, ml: 3 }}
              >
                Among leave law built now.
              </Typography>
            </Grid>
            {lawHead.map((item) => (
              <Grid
                key={item.id}
                lg={2.5}
                md={2.5}
                sm={11}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: { lg: 3, md: 2, xs: 2 },
                  px: { lg: 0, xs: 1 },
                }}
              >
                <Image src={item.image} />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: "text.level1",
                    textAlign: "start",
                  }}
                >
                  {item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          mt: { lg: 5 },
          mb: { lg: 13, md: 10, sm: 8, xs: 5 },
          rowGap: { sm: 2, xs: 3 },
          columnGap: { lg: 3, md: 3, sm: 5 },
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {lawDesc.map((item) => (
          <Grid lg={5} md={5} sm={8} xs={10} key={item.id}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: "#F8F9FD",
                margin: 0,
                padding: { lg: 2, md: 1 },
                position: "relative",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{
                    letterSpacing: -0.2,
                    fontSize: "2.40rem",
                    lineHeight: 1.2,
                    "@media (max-width:600px)": {
                      fontSize: "2rem",
                    },
                    fontWeight: 700,
                    mt: 2,
                    px: { lg: 8, md: 0, sm: 0 },
                    py: 3,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    letterSpacing: -0.5,
                    color: "text.level1",
                    textAlign: "center",
                    fontSize: "16px",
                    px: { lg: 5 },
                    mb: 2,
                    lineHeight: 1.8,
                  }}
                >
                  {item.desc}
                </Typography>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                    fontSize: { lg: "15px", xs: "13px" },
                    borderRadius: "10px",
                    fontWeight: 550,
                    px: { lg: 4, xs: 2 },
                    py: { lg: 1.8, xs: 1 },
                    mt: { lg: 3 },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
