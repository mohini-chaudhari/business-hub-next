import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInModal: false,
  signUpModal: false,
  profileModal: false,
  editProfileModal: false,
  notificationModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignInModal: (state) => { state.signInModal = true; },
    closeSignInModal: (state) => { state.signInModal = false; },
    openSignUpModal: (state) => { state.signUpModal = true; },
    closeSignUpModal: (state) => { state.signUpModal = false; },
    openProfileModal: (state) => { state.profileModal = true; },
    closeProfileModal: (state) => { state.profileModal = false; },
    openEditProfileModal: (state) => { state.editProfileModal = true; },
    closeEditProfileModal: (state) => { state.editProfileModal = false; },
    openNotificationModal: (state) => { state.notificationModal = true; },
    closeNotificationModal: (state) => { state.notificationModal = false; },
  },
});

export const {
  openSignInModal, closeSignInModal,
  openSignUpModal, closeSignUpModal,
  openProfileModal, closeProfileModal,
  openEditProfileModal, closeEditProfileModal,
  openNotificationModal, closeNotificationModal
} = modalSlice.actions;

export default modalSlice.reducer;
