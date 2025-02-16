"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { promotionCard } from "./config";
import { East } from "@mui/icons-material";

export function Promotion(): React.JSX.Element {
  const Image = styled("img")``;
  return (
    <Container
      maxWidth="xl"
      sx={{
        px: 0,
        background: {
          lg: " linear-gradient(180deg, #F5F8FF 97%, #ffffff 3%)",
          md: " linear-gradient(180deg, #F5F8FF 97%, #ffffff 3%)",
          sm: " linear-gradient(180deg, #F5F8FF 98.4%, #ffffff 1.6%)",
          xs: " linear-gradient(180deg, #F5F8FF 98.6%, #ffffff 1.4%)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 15,
        }}
      >
        <Box
          sx={{
            width: { lg: "60%", md: "90%", sm: "80%", xs: "95%" },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              letterSpacing: -0.5,
              fontSize: "2.50rem",
              fontWeight: 700,
              lineHeight: 1.2,
              "@media (max-width:600px)": {
                fontSize: "2.1rem",
              },
            }}
          >
            We help your business grow faster.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.level1",
              px: { lg: 18, md: 15, sm: 3, xs: 2 },
              mb: 10,
              mt: 2,
              letterSpacing: -0.5,
            }}
          >
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3.2}
          sx={{ maxWidth: "1200px", justifyContent: "center" }}
        >
          {promotionCard.map((item) => (
            <Grid item xs={11} sm={10} md={4} key={item.id}>
              <Card
                elevation={0}
                sx={{
                  padding: 2,
                  paddingTop: 5,
                  position: "relative",
                  borderRadius: "20px",
                  textAlign: "start",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Image src={item.logo} alt={item.title} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mt: 4,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    letterSpacing={-0.3}
                    sx={{
                      lineHeight: 1.8,
                      color: "text.level1",
                      fontSize: "1.02rem",
                      mb: 2,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      padding: 0,
                      textTransform: "none",
                      color: "#01966B",
                      fontSize: "1rem",
                    }}
                  >
                    Read More <East fontSize="small" sx={{ ml: 1 }} />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            fontSize: "1rem",
            px: 5,
            py: 1.5,
            borderRadius: "12px",
            mt: 6,
          }}
        >
          More About Platform
        </Button>
      </Box>
    </Container>
  );
}
