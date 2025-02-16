"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  TextField,
  Typography,
} from "@mui/material";

export function Footer(): React.JSX.Element {
  const sections = [
    { title: "Company", items: ["About Us", "Careers", "Blog", "Pricing"] },
    { title: "Resources", items: ["Templates", "Tutorials", "Free resource", "Contract templates"] },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <List>
              <ListSubheader sx={{ color: "text.primary", fontSize: 20, fontWeight: 700 }}>
                AR Shakir
              </ListSubheader>
              <ListItem>
                <ListItemText sx={{ color: "text.secondary", maxWidth: 250 }}>
                  Simple innate summer fat appear basket his desire joy.
                </ListItemText>
              </ListItem>
              <ListItem>
                <Box display="flex" gap={2}>
                  {["LinkedIn", "Messenger", "Twitter", "Twoo"].map((platform) => (
                    <img key={platform} src={`assets/${platform}.svg`} alt={platform} />
                  ))}
                </Box>
              </ListItem>
            </List>
          </Grid>

          {sections.map(({ title, items }) => (
            <Grid key={title} item xs={12} md={title === "Company" ? 2 : 2.5}>
              <List>
                <ListSubheader sx={{ color: "text.primary", fontSize: 18, fontWeight: 600 }}>
                  {title}
                </ListSubheader>
                {items.map((item) => (
                  <ListItem key={item} sx={{ py: 0 }}>
                    <ListItemText primaryTypographyProps={{ fontSize: 16 }}>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}

          <Grid item xs={12} md={4.5}>
            <List>
              <ListSubheader sx={{ color: "text.primary", fontSize: 18, fontWeight: 600 }}>
                Join Our Newsletter
              </ListSubheader>
              <ListItem>
                <TextField
                  placeholder="Your email address"
                  variant="filled"
                  sx={{
                    width: "100%",
                    backgroundColor: "#F9F9F9",
                    "& .MuiFilledInput-input": { height: 50 },
                    "& .MuiInputBase-input": { p: "0px 15px !important", fontSize: 15 },
                    "& .MuiInputBase-root":{p:'0px'}
                  }}
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <Button
                        sx={{
                          backgroundColor: "secondary.main",
                          color: "common.white",
                          borderRadius: 0,
                          width: "50%",
                          height: 50,
                          fontWeight: 500,
                          textTransform: "none",
                        }}
                      >
                        Subscribe
                      </Button>
                    ),
                  }}
                />
              </ListItem>
              <ListItem>
                <Typography sx={{ color: "text.secondary", fontSize: "1rem" }}>
                  * Will send you weekly updates for your better finance management.
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ borderBottomWidth: 1, background: "white", mt: 6 }} />
        <Typography variant="body2" sx={{ textAlign: "center", my: { md: 4, xs: 2 }, pb: 3 }}>
          Copyright @ BusinessHub 2022. All Rights Reserved.
        </Typography>
      </Box>
    </Container>
  );
}
