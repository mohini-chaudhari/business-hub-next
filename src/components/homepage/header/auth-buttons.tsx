"use client";
import { Avatar, Button, IconButton, Stack } from "@mui/material";
import * as React from "react";
import { authButtons } from "./config";
import { SignInDialog } from "../dialogs/sign-in";
import { SignUpDialog } from "../dialogs/sign-up";
import { ProfileDialog } from "../dialogs/profile";
import EditProfileDialog from "../dialogs/edit-profile";
import { NotificationDialog } from "../dialogs/notification";
import { logout } from "@/store/auth-slice";
import { Notifications } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchNotifications } from "@/store/notification-slice"; // Import fetchNotifications thunk
import {
  openSignInModal,
  closeSignInModal,
  openSignUpModal,
  closeSignUpModal,
  openProfileModal,
  closeProfileModal,
  openEditProfileModal,
  closeEditProfileModal,
  openNotificationModal,
  closeNotificationModal
} from "@/store/modal-slice";

export default function AuthButtons(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const userData = JSON.parse(sessionStorage.getItem("loginData") || "{}");

  const signInModal = useAppSelector((state) => state.modal.signInModal);
  const signUpModal = useAppSelector((state) => state.modal.signUpModal);
  const profileModal = useAppSelector((state) => state.modal.profileModal);
  const editProfileModal = useAppSelector((state) => state.modal.editProfileModal);
  const notificationModal = useAppSelector((state) => state.modal.notificationModal);
  const notifications = useAppSelector((state) => state.notifications.notifications); // Redux state se notifications lein

  // Load notifications when the component mounts
  React.useEffect(() => {
    if (token) {
      dispatch(fetchNotifications());
    }
  }, [dispatch, token]);

  return (
    <>
      <Stack
        direction="row"
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
                backgroundColor: "primary.main",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
              }}
              onClick={() => dispatch(openProfileModal())}
            >
              {userData.firstName} {userData.lastName}
              <Avatar sx={{ height: 24, width: 24 }} />
            </Button>
            <IconButton
              onClick={() => {
                dispatch(openNotificationModal());
                dispatch(fetchNotifications()); // Fetch notifications on click
              }}
            >
              <Notifications sx={{ color: "primary.main", height: 20, width: 20 }} />
            </IconButton>
          </>
        ) : (
          authButtons.map((authButton, index) => (
            <Button
              key={index}
              sx={{
                color: authButton.variant === "outlined"
                  ? "text.primary"
                  : "primary.contrastText",
                textTransform: "none",
                backgroundColor: authButton.variant === "contained"
                  ? "primary.main"
                  : "transparent",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
              }}
              onClick={() =>
                authButton.label === "Sign In"
                  ? dispatch(openSignInModal())
                  : dispatch(openSignUpModal())
              }
            >
              {authButton.label}
            </Button>
          ))
        )}
      </Stack>

      {/* All Modals */}
      <SignInDialog open={signInModal} onClose={() => dispatch(closeSignInModal())} />
      <SignUpDialog open={signUpModal} onClose={() => dispatch(closeSignUpModal())} />
      <ProfileDialog
        open={profileModal}
        onClose={() => dispatch(closeProfileModal())}
        openEditProfile={() => dispatch(openEditProfileModal())}
      />
      <EditProfileDialog
        open={editProfileModal}
        onClose={() => dispatch(closeEditProfileModal())}
      />
      <NotificationDialog
        open={notificationModal}
        onClose={() => dispatch(closeNotificationModal())}
        notification={notifications} // Redux state se notifications pass karein
      />
    </>
  );
}
