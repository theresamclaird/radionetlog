import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  password: string;
}

export default function Login() {
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
      await Auth.signIn(data.username, data.password);
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
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        style={{ marginTop: "1rem" }}
      >
        <Grid item>
          <TextField
            variant="outlined"
            id="username"
            label="Username"
            type="text"
            error={errors.username != null}
            helperText={
              errors.username != null ? errors.username.message : null
            }
            {...register("username", {
              required: { value: true, message: "Please enter a username." },
            })}
          />
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            id="password"
            label="Password"
            type="password"
            error={errors.password != null}
            helperText={
              errors.password != null ? errors.password.message : null
            }
            {...register("password", {
              required: { value: true, message: "Please enter a password." },
            })}
          />
        </Grid>

        <Grid item>
          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="error">
          {loginError}
        </Alert>
      </Snackbar>
    </form>
  );
}
