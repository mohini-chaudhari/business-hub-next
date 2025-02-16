"use client";

import { Close } from "@mui/icons-material";
import { Avatar, Box, Button, Dialog, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

interface ProfileProps {
  open: boolean;
  onClose: () => void;
  openEditProfile:()=>void;
}

export function ProfileDialog({
  open,
  onClose,
  openEditProfile
}: ProfileProps): React.JSX.Element {
  const userData = JSON.parse(sessionStorage.getItem("loginData")||'{}');
  return (
    <>
    {(userData)?(
      <Dialog
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDialog-container": {
            height: "auto",
            position: "absolute",
            top:'3%',
            right: "10%",
          },
          "& .MuiDialog-paper": {
          borderRadius: "15px",
          overflowY:'unset',
          position:'relative',
        },
        }}
        PaperProps={{
          sx: {
            height: "406px",
            width: "360px",
            borderRadius: "15px",
          },
        }}
      >
        <IconButton sx={{position:'absolute',top:-45,right:0}} onClick={onClose}>
        <Close sx={{color:'#ffffff',bgcolor:'#aaa6a6',opacity:0.4,borderRadius:'50%',height:30,width:30}}/>
      </IconButton>
        <Stack
          margin={"50px 20px 20px 20px"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Avatar 
          sx={{
            maxHeight: "120px",
                maxWidth: "120px",
                width: "100%",
                height: "100%",
          }}
          />
          <Typography variant='h6' sx={{fontWeight:'bold'}}>
            {userData.firstName} {userData.lastName}{" "}
          </Typography>
          <Typography variant='body2' sx={{fontWeight:'#999999',color:'text.secondary'}}>
              {userData.email}
          </Typography>
          <Box sx={{ marginTop: "40px", width: "100%" }}>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  fontWeight: "550",
                  height: "50px",
                  color: "primary.main",
                  textTransform:'none',
                  backgroundColor: "#EBEAFF",
                }}
              >
                Change Password
              </Button>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  width: "100%",
                  fontSize: "15px",
                  fontWeight: "550",
                  marginTop: "15px",
                  textTransform:'none',
                  height: "50px",
                }}
                onClick={()=>{
                  onClose();
                  openEditProfile();
                }}
              >
                Edit Profile
              </Button>
            </Box>
        </Stack>
      </Dialog>
    ):('') }
      
    </>
  );
}
