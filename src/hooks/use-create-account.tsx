import axios, { AxiosError } from "axios";
import { useSnackbar } from "notistack";

interface AuthResponse {
  data: {
    userId: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    providerId: number;
    providerType: string | null;
    authentication: {
      accessToken: string;
      refreshToken: string;
      expireAt: number;
    };
  };
}

interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useCreateAccount = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSignup = async (values: SignUpValues, onSuccess: () => void) => {
    // console.log('inside handleSignup method')
    try {
      const response = await axios.post<AuthResponse>(
        `https://uniqual.dev:3001/api/v1/auth/register`,
        values,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data && response.data.data) {
        enqueueSnackbar("Account created successfully.", {
          variant: "success",
        });
        onSuccess();
      } else {
        enqueueSnackbar("An unexpected error occurred.", {
          variant: "error",
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "Error contacting server.";
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };
  return {handleSignup};
};
