import axios, { AxiosError } from "axios";
import { login } from "../store/auth-slice";
import { useSnackbar } from "notistack";
import { useAppDispatch } from "@/store/store";

interface LoginValues {
  email: string;
  password: string;
}

interface AuthResponse {
  data: {
    authentication: {
      accessToken: string;
    };
    userId: string;
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = async (values: LoginValues, onSuccess: () => void) => {
    try {
      const response = await axios.post<AuthResponse>(
        `https://uniqual.dev:3001/api/v1/auth/login`,
        values,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data && response.data.data) {
        const token = response.data.data.authentication.accessToken;
        dispatch(login(token));

        localStorage.setItem("userId", response.data.data.userId);
        sessionStorage.setItem(
          "loginData",
          JSON.stringify({
            firstName: response.data.data?.firstName,
            lastName: response.data.data?.lastName,
            email: values.email,
            password: values.password,
            token: response.data.data.authentication.accessToken,
          }),
        );

        enqueueSnackbar("Login successful.", { variant: "success" });
        onSuccess();
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage = axiosError.response?.data?.message || "Error contacting server.";
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };

  return { handleLogin };
};
