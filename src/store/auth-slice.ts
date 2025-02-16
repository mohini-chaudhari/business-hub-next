import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack"; // Import notistack for notifications

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: sessionStorage.getItem("loginData") 
    ? JSON.parse(sessionStorage.getItem("loginData") || "{}").token 
    : null,
  loading: false,
  error: null,
};

// Login API Call
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://uniqual.dev:3001/api/v1/auth/login", { email, password });
      const data = response.data.data;

      sessionStorage.setItem("loginData", JSON.stringify({ ...data, token: data.authentication.accessToken }));
      localStorage.setItem("userId", data.userId);
      enqueueSnackbar("Login successful!", { variant: "success" }); // Show success message
      return data.authentication.accessToken;
    } catch (error: any) {
      enqueueSnackbar(error.response?.data?.message || "Login failed", { variant: "error" });
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Register API Call
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: { firstName: string; lastName: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://uniqual.dev:3001/api/v1/auth/register", userData);
      enqueueSnackbar("Account created successfully!", { variant: "success" }); // Show success message
      return response.data.data;
    } catch (error: any) {
      enqueueSnackbar(error.response?.data?.message || "Registration failed", { variant: "error" });
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      sessionStorage.removeItem("loginData");
      localStorage.removeItem("userId");
      enqueueSnackbar("Logout successful!", { variant: "success" }); // Show success message
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
