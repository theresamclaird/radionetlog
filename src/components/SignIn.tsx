import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { type SxProps } from "@mui/material/styles";

interface IFormInput {
  signinusername: string;
  signinpassword: string;
}

interface Props {
  sx?: SxProps;
}

export default function SignIn({ sx }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await Auth.signIn(data.signinusername, data.signinpassword);
      void router.push("/");
    } catch (error) {
      console.error(error);
      setLoginError(error.message);
      setOpen(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        <Typography variant="h2">Sign In</Typography>
        <TextField
          variant="outlined"
          id="signinusername"
          label="Call Sign"
          type="text"
          fullWidth
          error={errors.signinusername != null}
          helperText={
            errors.signinusername != null ? errors.signinusername.message : null
          }
          {...register("signinusername", {
            required: {
              value: true,
              message: "Please enter a call sign.",
            },
          })}
        />
        <TextField
          variant="outlined"
          id="signinpassword"
          label="Password"
          type="password"
          fullWidth
          error={errors.signinpassword != null}
          helperText={
            errors.signinpassword != null ? errors.signinpassword.message : null
          }
          {...register("signinpassword", {
            required: {
              value: true,
              message: "Please enter a password.",
            },
          })}
        />
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="error">
          {loginError}
        </Alert>
      </Snackbar>
    </form>
  );
}
