'use client'
import { Box, Button, Container, Typography } from "@mui/material";
export function ProcessHeading():React.JSX.Element{
  return(
    <>
      <Box
          sx={{
            margin:'auto',
            position: "relative",
            zIndex: 3,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: { lg: "60%", md: "80%", sm: "80%", xs: "95%" },
            padding: { xs: 2, sm: 3, md: 4 },
            mt:{md:13,sm:5,xs:5},
            mb:{md:5}
          }}
        >
          <Typography
          variant="subtitle2"
            sx={{
              color: "secondary.dark",
              wordSpacing:-2,
              fontWeight: 700,
              textTransform: "uppercase",
              // fontSize: { lg: "14px", md: "13px", sm: "12px", xs: "11px" },
              mb: 1,
            }}
          >
            Stockie Operation Across the World
          </Typography>

          <Typography
          variant="h3"
            sx={{
              wordSpacing:-2,
              fontWeight: 700,
              py: 2,
            }}
          >
            We have the best team and best process
          </Typography>

          <Typography
          variant="body2"
            sx={{
              color: 'text.level1',
              wordSpacing:-1,
              fontSize: { lg: "17px"},
              mx: { lg: 9, md: 10, sm: 5, xs: 2 },
            }}
          >
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </Typography>
          <Button
            sx={{
              textTransform:'none',
              fontWeight:700,
              color: 'primary.contrastText',
              backgroundColor: 'primary.dark',
              px: { lg: 5, md: 4, sm: 4, xs: 3 },
              py: { lg: 2.2, md: 1.8, sm: 1.5, xs: 1.5 },
              borderRadius: "30px",
              mt: { lg: 5, md: 4, sm: 3, xs: 3 },
              fontSize: { lg: "14px", md: "15px", sm: "14px", xs: "13px" },
            }}
          >
            Get Started
          </Button>
        </Box>
    </>
  )
}