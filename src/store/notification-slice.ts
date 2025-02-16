import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { enqueueSnackbar } from "notistack"; // Import notistack for notifications

interface NotificationState {
  notifications: any[];
  loading: boolean;
  error: string | null;
}

const initialState: NotificationState = {
  notifications: [],
  loading: false,
  error: null,
};

// Fetch Notifications API Call
export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const token = JSON.parse(sessionStorage.getItem("loginData") || "{}").token;
      const response = await axios.post(
        "https://uniqual.dev:3001/api/v1/users/notifications",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.data;
    } catch (error: any) {
      enqueueSnackbar("Failed to fetch notifications", { variant: "error" });

      return rejectWithValue(error.response?.data?.message || "Failed to fetch notifications");
    }
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default notificationSlice.reducer;
