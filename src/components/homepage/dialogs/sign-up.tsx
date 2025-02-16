"use client";

import { useCreateAccount } from "@/hooks/use-create-account";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

interface SignUpProps {
  open: boolean;
  onClose: () => void;
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
  label: {
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
      fontSize: "18px",
    },
  },
};

const validationSchema = yup.object({
  firstName: yup.string().required("Please enter firstname."),
  lastName: yup.string().required("Please enter lastname"),
  email: yup.string().email().required("Please enter email."),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 character long.")
    .required("Please enter a password"),
  confirmPassword: yup
    .string()
    .required("Please enter confirm password.")
    .oneOf(
      [yup.ref("password")],
      "Password and Confirm password must be match."
    ),
});
export function SignUpDialog({
  open,
  onClose,
}: SignUpProps): React.JSX.Element {
  const { handleSignup } = useCreateAccount();
  const formikSignup = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      await handleSignup(values, onClose);
    },
  });
  return (
    <>
      <Dialog
        aria-modal
        open={open}
        onClose={onClose}
        fullWidth
        sx={{
          "&. MuiDialog-container": {
            height: "auto",
          },
          "& .MuiDialog-paper": {
            borderRadius: "15px",
            overflowY: "unset",
            position: "relative",
          },
        }}
      >
        <IconButton sx={{position:'absolute',top:-45,right:0}} onClick={onClose}>
        <Close sx={{color:'#ffffff',bgcolor:'#aaa6a6',opacity:0.4,borderRadius:'50%',height:30,width:30}}/>
      </IconButton>
        <DialogTitle sx={style.title}>Create Your Account</DialogTitle>
        <DialogContent>
          <form style={style.form} onSubmit={formikSignup.handleSubmit}>
            <Grid container direction={"row"} justifyContent={"space-between"}>
              <Grid lg={5.8}>
                <Box sx={{ mb: 4 }}>
                  <FormLabel htmlFor="firstName" sx={style.label}>
                    First Name
                  </FormLabel>
                  <TextField
                    fullWidth
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    sx={style.input}
                    onChange={formikSignup.handleChange}
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.firstName}
                    error={Boolean(
                      formikSignup.errors.firstName &&
                        formikSignup.touched.firstName
                    )}
                  />
                  <FormHelperText
                    sx={{ color: "error.main", fontSize: "14px" }}
                  >
                    {formikSignup.errors.firstName}
                  </FormHelperText>
                </Box>
              </Grid>
              <Grid lg={5.8}>
                <Box sx={{ mb: 4 }}>
                  <FormLabel htmlFor="lastName" sx={style.label}>
                    Last Name
                  </FormLabel>
                  <TextField
                    fullWidth
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    sx={style.input}
                    onChange={formikSignup.handleChange}
                    onBlur={formikSignup.handleBlur}
                    value={formikSignup.values.lastName}
                    error={Boolean(
                      formikSignup.errors.lastName &&
                        formikSignup.touched.lastName
                    )}
                  />
                  <FormHelperText
                    sx={{ color: "error.main", fontSize: "14px" }}
                  >
                    {formikSignup.errors.lastName}
                  </FormHelperText>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mb: 4 }}>
              <FormLabel htmlFor="email" sx={style.label}>
                Email
              </FormLabel>
              <TextField
                fullWidth
                id="email"
                type="text"
                name="email"
                placeholder="Enter Email"
                sx={style.input}
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                value={formikSignup.values.email}
                error={Boolean(
                  formikSignup.errors.email && formikSignup.touched.email
                )}
              />
              <FormHelperText sx={{ color: "error.main", fontSize: "14px" }}>
                {formikSignup.errors.email}
              </FormHelperText>
            </Box>
            <Box sx={{ mb: 4 }}>
              <FormLabel htmlFor="password" sx={style.label}>
                Password
              </FormLabel>
              <TextField
                fullWidth
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                sx={style.input}
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                value={formikSignup.values.password}
                error={Boolean(
                  formikSignup.errors.password && formikSignup.touched.password
                )}
              />
              <FormHelperText sx={{ color: "error.main", fontSize: "14px" }}>
                {formikSignup.errors.password}
              </FormHelperText>
            </Box>
            <Box sx={{ mb: 4 }}>
              <FormLabel htmlFor="confirmPassword" sx={style.label}>
                Confirm Password
              </FormLabel>
              <TextField
                fullWidth
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                sx={style.input}
                onChange={formikSignup.handleChange}
                onBlur={formikSignup.handleBlur}
                value={formikSignup.values.confirmPassword}
                error={Boolean(
                  formikSignup.errors.confirmPassword &&
                    formikSignup.touched.confirmPassword
                )}
              />
              <FormHelperText sx={{ color: "error.main", fontSize: "14px" }}>
                {formikSignup.errors.confirmPassword}
              </FormHelperText>
            </Box>

            <Button
              type="submit"
              fullWidth
              sx={{
                textTransform: "none",
                color: "primary.contrastText",
                backgroundColor: "primary.main",
                borderRadius: "15px",
                fontWeight: 600,
                py: 2,
              }}
            >
              Sign up
            </Button>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Typography sx={{ fontSize: "15px" }}>
                Already have an account? <Link> Sign in</Link>
              </Typography>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
