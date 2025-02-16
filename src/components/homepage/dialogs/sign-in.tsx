"use client";

import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useLogin } from "@/hooks/use-login"; // Import the useLogin hook
import { useDispatch } from "react-redux";
import { Close } from "@mui/icons-material";

interface SignInProps {
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
  email: yup
    .string()
    .email("Invalid email.")
    .required("Please enter an email."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Please enter a password."),
});

export function SignInDialog({
  open,
  onClose,
}: SignInProps): React.JSX.Element {
  const { handleLogin } = useLogin(); // Get login function from useLogin
  const dispatch = useDispatch();

  const formikSignin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await handleLogin(values, onClose);
      formikSignin.resetForm();
    },
  });

  return (
    <Dialog
      aria-modal
      open={open}
      onClose={onClose}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "15px",
          overflowY:'unset',
          position:'relative',
        },
      }}
    >
      <IconButton sx={{position:'absolute',top:-45,right:0}} onClick={onClose}>
        <Close sx={{color:'#ffffff',bgcolor:'#aaa6a6',opacity:0.4,borderRadius:'50%',height:30,width:30}}/>
      </IconButton>
      <DialogTitle sx={style.title}>Login Your Account</DialogTitle>
      <DialogContent>
        <form style={style.form} onSubmit={formikSignin.handleSubmit}>
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
              onChange={formikSignin.handleChange}
              onBlur={formikSignin.handleBlur}
              value={formikSignin.values.email}
              error={Boolean(
                formikSignin.errors.email && formikSignin.touched.email
              )}
            />
            <FormHelperText sx={{ fontSize: "14px", color: "error.main" }}>
              {formikSignin.touched.email ? formikSignin.errors.email : ""}
            </FormHelperText>
          </Box>
          <Box>
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
              onChange={formikSignin.handleChange}
              onBlur={formikSignin.handleBlur}
              value={formikSignin.values.password}
              error={Boolean(
                formikSignin.errors.password && formikSignin.touched.password
              )}
            />
            <FormHelperText sx={{ fontSize: "14px", color: "error.main" }}>
              {formikSignin.touched.password
                ? formikSignin.errors.password
                : ""}
            </FormHelperText>
          </Box>
          <Box sx={{ textAlign: "end", mb: 1 }}>
            <Link sx={{ fontSize: "15px" }}>Forgot Password?</Link>
          </Box>
          <Box sx={{ width: "100%" }}>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography sx={{ fontSize: "15px" }}>
                  Remember me next time
                </Typography>
              }
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            sx={{
              color: "primary.contrastText",
              backgroundColor: "primary.main",
              borderRadius: "15px",
              textTransform: "none",
              fontWeight: 600,
              py: 2,
            }}
          >
            Login
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Typography sx={{ fontSize: "15px" }}>
              Don't have an account? <Link> Sign up</Link>
            </Typography>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}
