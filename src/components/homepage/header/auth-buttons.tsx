"use client";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import * as React from "react";
import { authButtons } from "./config";
import { useDispatch } from "react-redux";
import { SignInDialog } from "../dialogs/sign-in";
import { SignUpDialog } from "../dialogs/sign-up";
import { useAppSelector } from "@/store/store";
import { logout } from "@/store/auth-slice";
import { Notifications } from "@mui/icons-material";
import { ProfileDialog } from "../dialogs/profile";
import EditProfileDialog  from "../dialogs/edit-profile";
import { NotificationDialog } from "../dialogs/notification";
import { UseNotification } from "@/hooks/use-notification";
import { openSignInModal,closeSignInModal } from "@/store/modal-slice";


export default function AuthButtons(): React.JSX.Element {
  const dispatch = useDispatch();
  let token = useAppSelector((state) => state.auth.token);
  let userData = JSON.parse(sessionStorage.getItem("loginData")||'{}');
  const { getNotification, notification } = UseNotification();
    // const signInModal = useAppSelector((state)=>state.modal.singInModal);
  
  const [signInModal, setSignInModal] = React.useState(false);
  const [signUpModal, setSignUpModal] = React.useState(false);
  const [profileModal, setProfileModal] = React.useState(false);
  const [editProfileModal, setEditProfileModal] = React.useState(false);
  const [notificationModal, setNotificationModal] = React.useState(false);

  const handleOpenSignIn = () => setSignInModal(true);
  const handleCloseSignIn = () => setSignInModal(false);
  const handleOpenSignUp = () => setSignUpModal(true);
  const handleCloseSignUp = () => setSignUpModal(false);
  const handleOpenProfile = () => setProfileModal(true);
  const handleCloseProfile = () => setProfileModal(false);
  const handleOpenEditProfile = () => setEditProfileModal(true);
  const handleCloseEditProfile = () => setEditProfileModal(false);
  const handleNotificationOpen = () => {
    setNotificationModal(true);
    getNotification();
  };
  const handleNotificationClose = () => setNotificationModal(false);

  return (
    <>
      <Stack
        direction={"row"}
        gap={2}
        sx={{ display: { xs: "none", lg: "flex", md: "flex" } }}
      >
        {token ? (
          <>
            <Button
              sx={{
                color: "text.primary",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
              }}
              onClick={() => dispatch(logout())}
            >
              Log out
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "primary.contrastText",
                backgroundColor: "primary.maiin",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
              }}
              onClick={() => handleOpenProfile()}
            >
              {" "}
              {userData.firstName} {userData.lastName}
              <Avatar sx={{ height: 24, width: 24 }} />
            </Button>
            <IconButton onClick={handleNotificationOpen}>
              <Notifications sx={{ color: "primary.main" ,height:20,width:20}} />
            </IconButton>
          </>
        ) : (
          authButtons.map((authButton, index) => (
            <Button
              key={index}
              sx={{
                color:
                  authButton.variant === "outlined"
                    ? "text.primary"
                    : "primary.contrastText",
                textTransform: "none",
                backgroundColor:
                  authButton.variant === "contained"
                    ? "primary.main"
                    : "transparent",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
              }}
              // onClick={()=>authButton.label==='Sign In'?dispatch(openSignInModal()):alert(authButton.label)}
              onClick={() =>
                authButton.label === "Sign In"
                  ? handleOpenSignIn()
                  : handleOpenSignUp()
              }
            >
              {authButton.label}
            </Button>
          ))
        )}
      </Stack>
      {/* <SignInDialog open={signInModal} onClose={()=>dispatch(closeSignInModal())}/> */}
      {/* All Modals */}
      <SignInDialog open={signInModal} onClose={handleCloseSignIn} />
      <SignUpDialog open={signUpModal} onClose={handleCloseSignUp} />
      <ProfileDialog
        open={profileModal}
        onClose={handleCloseProfile}
        openEditProfile={handleOpenEditProfile}
      />
      <EditProfileDialog
        open={editProfileModal}
        onClose={handleCloseEditProfile}
      />
      <NotificationDialog
        open={notificationModal}
        onClose={handleNotificationClose}
        notification={notification}
      />
    </>
  );
}
