import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  singInModal: boolean;
}

const initialState: ModalState = {
  singInModal: false
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignInModal: (state) => {
      state.singInModal = true;
    },
    closeSignInModal: (state) => {
      state.singInModal = false;
    },
  },
});

export const {openSignInModal,closeSignInModal} = modalSlice.actions;
export default modalSlice.reducer;
