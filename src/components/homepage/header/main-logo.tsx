"use client";
import { Box, IconButton, styled } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { MobileNav } from "./mobile-nav";
import { useDispatch } from "react-redux";
import { toggleMobileNav } from "@/store/nav-slice";

export function MainLogo(): React.JSX.Element {
  const Image = styled("img")``;
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{display:'flex',alignItems:'center'}}>
        <Box sx={{display: { md:'none',sm:'block',xs:'block'}}}>
          <IconButton onClick={()=>{
            dispatch(toggleMobileNav())
          }}>
            <MenuIcon sx={{ color: "primary.main" }}  />
          </IconButton>
        </Box>
        <Image src="/assets/BusinessHub..svg" alt="app_logo" height={20} />
      </Box>
      <MobileNav/>
    </>
  );
}
