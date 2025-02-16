import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./nav-slice"
import authReducer from './auth-slice'
import modalReducer from './modal-slice'
import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";

export const store = configureStore({
  reducer:{
    nav: navReducer,
    auth: authReducer,
    modal: modalReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;