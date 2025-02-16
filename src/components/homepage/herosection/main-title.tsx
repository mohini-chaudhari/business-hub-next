"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export function MainTitle(): React.JSX.Element {
  return (
    <Box>
      <Stack>
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          Product Growth Solution in Single Platform.
        </Typography>
        <Typography variant="h1">
          Managing business payments has never been easier
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", mt: 2, pr: { lg: 2, md: 2 } }}
        >
          Never at water me might. On formed merits hunted unable merely by mr
          whence or. Possession the unpleasing simplicity her uncommonly.
        </Typography>
        <Box
          component="form"
          boxShadow={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#ffffff",
            p: 2,
            my: 3,
          }}
        >
          <TextField
            fullWidth
            variant="standard"
            label="Stay connected & get updates"
            placeholder="shakir260@gmail.com"
            InputLabelProps={{ shrink: true }}
            sx={{
              mr: 2,
              "& .MuiInputLabel-root.Mui-focused": { color: "text.secondary" },
            }}
            InputProps={{
              disableUnderline: true,
              sx: { fontWeight: 800, fontSize: "20px" },
            }}
          />
          <Button
            sx={{
              color: "primary.contrastText",
              backgroundColor: "secondary.light",
              borderRadius: 0,
              py: 2,
              px: { lg: 8, md: 6, sm: 4, xs: 3 },
              "&:hover": { backgroundColor: "#333333" },
            }}
          >
            Submit
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: { lg: 2, md: 3, sm: 2 },
            mb: { lg: 5, md: 4, sm: 5, xs: 5 },
          }}
        >
          {["Free Register", "Great Service"].map((text) => (
            <Box
              key={text}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <CheckCircle sx={{ color: "secondary.dark" }} />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontSize: "14px" }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}