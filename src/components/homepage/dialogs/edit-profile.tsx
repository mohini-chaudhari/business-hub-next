import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
  Avatar,
  FormLabel,
  IconButton,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEditProfile } from "@/hooks/use-edit-profile";
import { Close } from "@mui/icons-material";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
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

const style = {
  form: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  title: {
    textAlign: "center",
    py: 5,
    fontSize: "30px",
    fontWeight: 500,
    color: "text.level4",
  },
  FormLabel: {
    fontSize: "15px",
    color: "text.level4",
  },
  input: {
    "& .MuiInputBase-root": {
      height: "60px",
    },
    "& .MuiInputBase-input": {
      fontSize: "16px",
    },
    "& input::placeholder": {
      fontSize: "16px",
    },
  },
};

const validationSchema = yup.object({
  firstName: yup.string().required("Please enter firstname.").trim(),
  lastName: yup.string().required("Please enter lastname.").trim(),
  gender: yup.string().required("Please select your gender.").trim(),
  companyName: yup.string().required("Please enter company name").trim(),
  jobTitle: yup.string().required("Please enter job role.").trim(),
  education: yup.string().required("Please enter education").trim(),
  qualification: yup
    .string()
    .required("Please enter your qualification.")
    .trim(),
  aboutMe: yup.string().required("Please enter something about you").trim(),
  experienceYearMin: yup
    .number()
    .min(0, "Please enter valid number")
    .required("Required field."),
  experienceYearMax: yup
    .number()
    .min(yup.ref("experienceYearMin"), "Please enter valid number")
    .required("Required field."),
  educationYearMin: yup
    .number()
    .min(0, "Should be less than ending year")
    .required("Required field."),
  educationYearMax: yup
    .number()
    .min(yup.ref("educationYearMin"), "Should be greater than starting year")
    .required("Required field."),
});

const EditProfileDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const theme = useTheme();
  const { update } = useEditProfile();

  const userData = JSON.parse(sessionStorage.getItem("loginData") || "{}");
  const initialValues: FormValues = {
    firstName: userData.firstName,
    lastName: userData.lastName || "",
    email: userData.email || "",
    gender: userData.gender || "",
    companyName: userData.companyName || "",
    education: userData.education || "",
    jobTitle: userData.jobTitle || "",
    aboutMe: userData.aboutMe || "",
    qualification: userData.qualification || "",
    experienceYearMin: userData.experienceYearMin || "",
    experienceYearMax: userData.experienceYearMax || "",
    educationYearMin: userData.educationYearMin || "",
    educationYearMax: userData.educationYearMax || "",
  };

  const formikEditProfile = useFormik<FormValues>({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      onClose();
      await update(values);
      console.log(values);
    },
  });

  return (
    <>
      <Dialog
        scroll="paper"
        open={open}
        onClose={onClose}
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "15px",
            overflowY: "unset",
            position: "relative",
          },
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: -40, right: 0 }}
          onClick={onClose}
        >
          <Close
            sx={{
              color: "#ffffff",
              bgcolor: "#aaa6a6",
              opacity: 0.4,
              borderRadius: "50%",
            }}
          />
        </IconButton>
        <DialogTitle sx={style.title}>Edit Profile</DialogTitle>
        <DialogContent sx={{ mx: { lg: 5 } }}>
          <form onSubmit={formikEditProfile.handleSubmit} style={style.form}>
            <Box>
              <FormLabel sx={style.FormLabel}>Profile Picture</FormLabel>
              <Box position={"relative"}>
                <Avatar
                  sx={{
                    height: "100px",
                    width: "100px",
                    mb: 4,
                    bgcolor: theme.palette.primary.main,
                  }}
                />
                <img
                  src={"assets/profile_update.svg"} 
                  alt="Profile Update"
                  style={{ position: "absolute", top: "40px", left: "35px" }}
                />
              </Box>
            </Box>

            <Grid container direction={"row"} justifyContent={"space-between"}>
              <Grid lg={5.8}>
                <Box sx={{ mb: 4 }}>
                  <FormLabel sx={style.FormLabel}>First Name</FormLabel>
                  <TextField
                    fullWidth
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    sx={style.input}
                    onChange={formikEditProfile.handleChange}
                    value={formikEditProfile.values.firstName}
                    error={
                      formikEditProfile.touched.firstName &&
                      Boolean(formikEditProfile.errors.firstName)
                    }
                  />
                </Box>
              </Grid>
              <Grid lg={5.8}>
                <Box sx={{ mb: 4 }}>
                  <FormLabel sx={style.FormLabel}>Last Name</FormLabel>
                  <TextField
                    fullWidth
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    sx={style.input}
                    onChange={formikEditProfile.handleChange}
                    value={formikEditProfile.values.lastName}
                    error={
                      formikEditProfile.touched.lastName &&
                      Boolean(formikEditProfile.errors.lastName)
                    }
                  />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mb: 4 }}>
              <FormLabel sx={style.FormLabel}>Email Address</FormLabel>
              <TextField
                disabled
                fullWidth
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                sx={style.input}
                onChange={formikEditProfile.handleChange}
                value={formikEditProfile.values.email}
                error={
                  formikEditProfile.touched.email &&
                  Boolean(formikEditProfile.errors.email)
                }
                helperText={formikEditProfile.errors.email}
              />
            </Box>
            <Box sx={{ mb: 4 }}>
              <FormLabel sx={style.FormLabel}>Gender</FormLabel>
              <Select
                id="gender"
                name="gender"
                sx={style.input}
                onChange={formikEditProfile.handleChange}
                value={formikEditProfile.values.gender}
                variant="outlined"
                fullWidth
              >
                <MenuItem value={"male"} sx={{ fontSize: "15px" }}>
                  Male
                </MenuItem>
                <MenuItem value={"female"} sx={{ fontSize: "15px" }}>
                  Female
                </MenuItem>
                <MenuItem value={"other"} sx={{ fontSize: "15px" }}>
                  Other
                </MenuItem>
              </Select>
              <FormHelperText sx={{ color: "error.main", fontSize: "15px" }}>
                {formikEditProfile.errors.gender}
              </FormHelperText>
            </Box>

            <Box px={0}>
              <FormLabel sx={style.FormLabel}>Experience</FormLabel>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="companyName"
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      sx={style.input}
                      onChange={formikEditProfile.handleChange}
                      value={formikEditProfile.values.companyName}
                      error={
                        formikEditProfile.touched.companyName &&
                        Boolean(formikEditProfile.errors.companyName)
                      }
                    />
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "15px" }}
                    >
                      {formikEditProfile.errors.companyName}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="jobTitle"
                      type="text"
                      name="jobTitle"
                      placeholder="Job role"
                      sx={style.input}
                      onChange={formikEditProfile.handleChange}
                      value={formikEditProfile.values.jobTitle}
                      error={
                        formikEditProfile.touched.jobTitle &&
                        Boolean(formikEditProfile.errors.jobTitle)
                      }
                    />
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "15px" }}
                    >
                      {formikEditProfile.errors.jobTitle}
                    </FormHelperText>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mb: 4, display: "flex", flexDirection: "column" }}>
              <Stack
                direction={"row"}
                width={"50%"}
                gap={1}
                alignItems={"center"}
                mt={"10px"}
              >
                <TextField
                  id="experienceYearMin"
                  name="experienceYearMin"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  sx={style.input}
                  value={formikEditProfile.values.experienceYearMin}
                />
                <Typography fontSize={"14px"}>TO</Typography>
                <TextField
                  id="experienceYearMax"
                  name="experienceYearMax"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  sx={style.input}
                  value={formikEditProfile.values.experienceYearMax}
                />
              </Stack>
              <FormHelperText sx={{ color: "error.main", fontSize: "15px" }}>
                {formikEditProfile.errors.experienceYearMin}
              </FormHelperText>
              <FormHelperText sx={{ color: "error.main", fontSize: "15px" }}>
                {formikEditProfile.errors.experienceYearMax}
              </FormHelperText>
            </Box>

            <Box px={0}>
              <FormLabel sx={style.FormLabel}>Education</FormLabel>
              <Grid
                container
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="education"
                      type="text"
                      name="education"
                      placeholder="School/College"
                      sx={style.input}
                      onChange={formikEditProfile.handleChange}
                      value={formikEditProfile.values.education}
                      error={
                        formikEditProfile.touched.education &&
                        Boolean(formikEditProfile.errors.education)
                      }
                    />
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "15px" }}
                    >
                      {formikEditProfile.errors.education}
                    </FormHelperText>
                  </Box>
                </Grid>
                <Grid lg={5.8}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      id="qualification"
                      type="text"
                      name="qualification"
                      placeholder="Qualification"
                      sx={style.input}
                      onChange={formikEditProfile.handleChange}
                      value={formikEditProfile.values.qualification}
                      error={
                        formikEditProfile.touched.qualification &&
                        Boolean(formikEditProfile.errors.qualification)
                      }
                    />
                    <FormHelperText
                      sx={{ color: "error.main", fontSize: "15px" }}
                    >
                      {formikEditProfile.errors.qualification}
                    </FormHelperText>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mb: 4, display: "flex", flexDirection: "column" }}>
              <Stack
                direction={"row"}
                width={"50%"}
                gap={1}
                alignItems={"center"}
                mt={"10px"}
              >
                <TextField
                  id="educationYearMin"
                  name="educationYearMin"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  sx={style.input}
                  value={formikEditProfile.values.educationYearMin}
                />
                <Typography fontSize={"14px"}>TO</Typography>
                <TextField
                  id="educationYearMax"
                  name="educationYearMax"
                  onChange={formikEditProfile.handleChange}
                  placeholder="Year"
                  variant="outlined"
                  sx={style.input}
                  value={formikEditProfile.values.educationYearMax}
                />
              </Stack>
              <FormHelperText sx={{ color: "error.main", fontSize: "15px" }}>
                {formikEditProfile.errors.educationYearMin}
              </FormHelperText>
              <FormHelperText sx={{ color: "error.main", fontSize: "15px" }}>
                {formikEditProfile.errors.educationYearMax}
              </FormHelperText>
            </Box>
            <Box sx={{ mb: 4 }}>
              <FormLabel sx={style.FormLabel}>About you</FormLabel>
              <TextField
                multiline
                fullWidth
                id="aboutMe"
                name="aboutMe"
                placeholder="Write something about you..."
                sx={style.input}
                onChange={formikEditProfile.handleChange}
                value={formikEditProfile.values.aboutMe}
                error={
                  formikEditProfile.touched.aboutMe &&
                  Boolean(formikEditProfile.errors.aboutMe)
                }
              />
              <FormHelperText sx={{ color: "error.main", fontSize: "15px" }}>
                {formikEditProfile.errors.aboutMe}
              </FormHelperText>
            </Box>
            <Button
              type="submit"
              fullWidth
              sx={{
                textTransform: "none",
                color: "primary.contrastText",
                backgroundColor: "primary.main",
                py: 2,
                mb: 4,
              }}
            >
              Update Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfileDialog;
