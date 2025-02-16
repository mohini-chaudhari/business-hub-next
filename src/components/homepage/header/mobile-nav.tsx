"use client";
import {
  Drawer,
  Box,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Button,
  Stack,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { ExpandMore } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { closeMobileNav } from "@/store/nav-slice";
import { authButtons, menuItems } from "./config";
import { useAppSelector } from "@/store/store";

export function MobileNav(): React.JSX.Element {
  const dispatch = useDispatch();
    const mobileNavOpen = useAppSelector((state)=>state.nav.mobileNavOpen);
  
  const [isProductMenuOpen, setIsProductMenuOpen] = React.useState(false);
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = React.useState(false);

  return (
    <Drawer
      sx={{
        width: "100%",
      }}
      open={mobileNavOpen}
      onClose={() => dispatch(closeMobileNav())}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <img
          src={"assets/BusinessHub..svg"}
          alt="app_logo"
          height={20}
        />
        <IconButton onClick={() => dispatch(closeMobileNav())}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => {
          const isSubMenu = item.submenu !== null;
          return (
            <React.Fragment key={item.label}>
              <ListItemButton
                onClick={() =>
                  isSubMenu &&
                  (item.label === "Product"
                    ? setIsProductMenuOpen((prev) => !prev)
                    : setIsTemplateMenuOpen((prev) => !prev))
                }
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary:{
                      fontSize: { xs: "13px", sm: "15px" },
                      fontWeight: 400
                    }
                  }}
                />
                {isSubMenu && (
                  <ExpandMore
                    sx={{
                      transform: (
                        item.label === "Product"
                          ? isProductMenuOpen
                          : isTemplateMenuOpen
                      )
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                )}
              </ListItemButton>
              {isSubMenu && (
                <Collapse
                  in={
                    item.label === "Product"
                      ? isProductMenuOpen
                      : isTemplateMenuOpen
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {item.submenu?.map((subItem, index) => (
                      <ListItemButton key={index} sx={{ pl: 2 }}>
                        <ListItemText
                          primary={subItem}
                          slotProps={{
                            primary:{
                              fontSize: { xs: "13px", sm: "15px" },
                              fontWeight: 400
                            }
                          }}
                          
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
        <Divider />
        <Stack spacing={2} sx={{ p: 2 }}>
          {authButtons.map((authButton, index) => (
            <Button
              key={index}
              sx={{
                color: authButton.variant === "outlined" ? "text.primary" : "primary.contrastText",
                textTransform: "none",
                backgroundColor: authButton.variant === "contained" ? "primary.main" : "transparent",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
                border: authButton.variant === "outlined" ? "1px solid" : "none",
              }}
            >
              {authButton.label}
            </Button>
          ))}
        </Stack>
      </List>
    </Drawer>
  );
}
