import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import { MainLogo } from "./main-logo";
import { MainNav } from "./main-nav";
import AuthButtons from "./auth-buttons";

export default function Header():React.JSX.Element{
  return(
      <AppBar elevation={0} sx={{px:{lg:10,md:8},backgroundColor:'#fff',position:'relative',background:'transparent'}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
      <MainLogo/>
      <MainNav/>
      <AuthButtons/>
        </Toolbar>
      </AppBar>
  )
}