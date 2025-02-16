import { Box, Typography } from "@mui/material";
import { companiesList } from "./config";

export function Companies(): React.JSX.Element {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: { lg: 8, md: 5, xs: 4 },
        px: { lg: 10, md: 5, sm: 4, xs: 1 },
        borderTop: "1px solid #C4C4C4",
        borderBottom: "1px solid #C4C4C4",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        Over 32k+ software businesses growing with AR Shakir
      </Typography>

      {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: { xs: "center", md: "space-evenly" },
          alignItems: "center",
          gap: { xs: 3, sm: 4, md: 5 },
          mt: { xs: 2, sm: 3 },
        }}
      >
        {companiesList.map(({ id, image }) => (
          <img key={id} src={image} style={{ maxHeight: 25 }} />
        ))}
      </Box>
    </Box>
  );
}
