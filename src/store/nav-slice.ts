import { createSlice } from "@reduxjs/toolkit";

interface NavState{
  mobileNavOpen: boolean;
  productMenuOpen: boolean;
  templateMenuOpen: boolean;
}

const initialState: NavState = {
  mobileNavOpen: false,
  productMenuOpen: false,
  templateMenuOpen:false,
};

export const navSlice = createSlice({
  name:'navigation',
  initialState,
  reducers: {
    toggleMobileNav: (state) =>{
      state.mobileNavOpen = !state.mobileNavOpen;
    },
    closeMobileNav: (state) =>{
      state.mobileNavOpen = false;
    },
    toggleProductMenu: (state) =>{
      state.productMenuOpen = !state.productMenuOpen;
    },
    closeProductMenu : (state) => {
      state.productMenuOpen = false;
    },
    toggleTemplateMenu: (state) =>{
      state.templateMenuOpen = !state.templateMenuOpen;
    },
    closeTemplateMenu: (state) =>{
      state.templateMenuOpen = false;
    }
  },
});

export const {
  toggleMobileNav,
  closeMobileNav,
  toggleProductMenu,
  closeProductMenu,
  toggleTemplateMenu,
  closeTemplateMenu,
} = navSlice.actions;

export default navSlice.reducer;

// export const store = configureStore({
//   reducer:{
//     navigation: navSlice.reducer,
//   }
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;