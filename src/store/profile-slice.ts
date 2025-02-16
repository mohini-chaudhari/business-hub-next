import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

interface ProfileState {
  user: any;
  loading: boolean;
  error: string | null;
}

const storedUser = sessionStorage.getItem("loginData");
const initialState: ProfileState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  loading: false,
  error: null,
};

// **✅ Async Thunk for Updating Profile**
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (userData: any, { rejectWithValue }) => {
    try {
      let storedUser: any = sessionStorage.getItem("loginData");
      let token = "";

      // **Check and Parse Stored User Data**
      try {
        storedUser = storedUser ? JSON.parse(storedUser) : null;
        token = storedUser?.token || "";
      } catch (error) {
        console.error("Invalid session data", error);
        sessionStorage.removeItem("loginData");
        enqueueSnackbar("Invalid session. Please log in again.", { variant: "error" });
        return rejectWithValue("Invalid session. Please log in again.");
      }

      if (!token) {
        enqueueSnackbar("Authentication error: Please log in again.", { variant: "error" });
        return rejectWithValue("Authentication error: Please log in again.");
      }

      // **✅ Exclude `email` from payload**
      const { email, ...allowedUserData } = userData;

      console.log("📢 Final Payload Sent to API:", JSON.stringify(allowedUserData, null, 2));

      const response = await axios.post(
        "https://uniqual.dev:3001/api/v1/users/update",
        allowedUserData, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!response.data || !response.data.data) {
        console.error("❌ Unexpected API response:", response.data);
        enqueueSnackbar("Server error: Unexpected response", { variant: "error" });
        return rejectWithValue("Server error: Unexpected response");
      }

      // ✅ Update session storage with new user data
      const updatedUser = { ...storedUser, ...allowedUserData };
      sessionStorage.setItem("loginData", JSON.stringify(updatedUser));

      enqueueSnackbar("✅ Profile updated successfully!", { variant: "success" });

      return response.data.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        sessionStorage.removeItem("loginData");
        enqueueSnackbar("Session expired. Please log in again.", { variant: "warning" });
        return rejectWithValue("Session expired. Please log in again.");
      }

      console.error("❌ API Error:", error.response?.data);
      enqueueSnackbar(error.response?.data?.message || "Update failed", { variant: "error" });
      return rejectWithValue(error.response?.data?.message || "Update failed");
    }
  }
);

// **✅ Redux Slice for Profile**
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default profileSlice.reducer;
