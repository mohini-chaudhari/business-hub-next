import axios from "axios";
import { useSnackbar } from "notistack";

// Define Types for Form Values
interface FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  companyName: string;
  education: string;
  jobTitle: string;
  aboutMe: string;
  qualification: string;
  experienceYearMin: string;
  experienceYearMax: string;
  educationYearMin: string;
  educationYearMax: string;
}

export const useEditProfile = () => {
  const { enqueueSnackbar } = useSnackbar();
  let token = sessionStorage.getItem("loginData") ? JSON.parse(sessionStorage.getItem("loginData") || "{}").token : "";

  const update = (values: FormValues) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      companyName: values.companyName,
      education: values.education,
      jobTitle: values.jobTitle,
      aboutMe: values.aboutMe,
      qualification: values.qualification,
      experienceYearMin: parseInt(values.experienceYearMin),
      experienceYearMax: parseInt(values.experienceYearMax),
      educationYearMin: parseInt(values.educationYearMin),
      educationYearMax: parseInt(values.educationYearMax),
    };

    axios
      .post(`https://uniqual.dev:3001/api/v1/users/update`, body, config)
      .then((response) => {
        if (response.data) {
          enqueueSnackbar("Profile updated successfully.", { variant: "success" });
          sessionStorage.setItem(
            "loginData",
            JSON.stringify({
              ...values,
              token,
            })
          );
        }
      })
      .catch((error) => {
        enqueueSnackbar("An unexpected error occurred.", { variant: "error" });
        console.log(error);
      });
  };
  return { update };
};
