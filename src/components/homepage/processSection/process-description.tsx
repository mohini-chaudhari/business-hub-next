'use client'
import { Box, Card, CardContent, Grid, styled, Typography } from "@mui/material";
import { processSteps } from "./config";

export function ProcessDescription():React.JSX.Element{
  const Image = styled("img")``;

  return(
    <Box
        sx={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          width:{lg:'80%',md:'90%'},
          margin:'auto',
          py: 4,
          mb:5
        }}
      >
        <Grid
          container
          spacing={2}
          columnGap={0}
          sx={{
            justifyContent: "center",
          }}
        >
          {processSteps.map((step, index) => (
            <Grid item  lg={4} xs={12} sm={12} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  padding: 2,
                  position: "relative",
                  textAlign: "left",
                  height: "100%",
                  borderRadius: "16px",
                  maxWidth: 360,
                  margin: "0 auto",
                }}
              >
                <CardContent>
                  <Image
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    sx={{
                      position: "absolute",
                      right: step.imagePosition,
                      top: "30px",
                      width: "100px",
                      height: "140px",
                    }}
                  />
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      height: "60px",
                      width: "60px",
                      borderRadius: "15px",
                      boxShadow: 6,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "secondary.dark",
                        height: "23px",
                        width: "23px",
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                  <Typography
                  variant="body2"
                    sx={{
                      fontWeight: 700,
                      mt: 3,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.level1',
                      mt: 1,
                      fontSize:'17px',
                      letterSpacing:-0.3
                    }}
                  >
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
  )
}