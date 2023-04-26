import React, { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import { type SxProps } from "@mui/material/styles";
import { Auth } from "aws-amplify";
import { type CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  code: string;
}

interface Props {
  sx?: SxProps;
}

export default function Signup({ sx = {} }: Props) {
  const [enableConfirmation, setEnableConfirmation] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [registrationError, setRegistrationError] = useState<string>("");
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm<IFormInput>();

  type AmplifyUser = CognitoUser | null;

  async function confirmVerification(data: IFormInput) {
    const { username, password, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser: AmplifyUser = await Auth.signIn(username, password);
      if (amplifyUser != null) {
        void router.push("/");
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function signUpWithEmailAndPassword(
    data: IFormInput
  ): Promise<CognitoUser> {
    const { username, password, email } = data;

    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    return user;
  }

  useEffect(() => {
    setFocus(enableConfirmation ? "code" : "username");
  }, [enableConfirmation]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("onSubmit.enableConfirmation", enableConfirmation);
    console.log("onSubmit.data", data);
    try {
      if (enableConfirmation) {
        await confirmVerification(data);
        await router.push("/");
      } else {
        await signUpWithEmailAndPassword(data);
        setEnableConfirmation(true);
      }
    } catch (error) {
      console.warn(error);
      setRegistrationError(error?.message);
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 2,
          ...sx,
        }}
      >
        <Typography variant="h2">Sign Up</Typography>
        <TextField
          disabled={enableConfirmation}
          variant="outlined"
          id="username"
          label="Call Sign"
          type="text"
          fullWidth
          error={errors.username != null}
          helperText={errors.username != null ? errors.username.message : null}
          {...register("username", {
            required: {
              value: true,
              message: "Please enter a call sign.",
            },
          })}
        />
        <TextField
          disabled={enableConfirmation}
          variant="outlined"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          error={errors.email != null}
          helperText={errors.email != null ? errors.email.message : null}
          {...register("email", {
            required: {
              value: true,
              message: "Please enter a valid email address.",
            },
          })}
        />
        <TextField
          disabled={enableConfirmation}
          variant="outlined"
          id="password"
          label="Password"
          type="password"
          fullWidth
          error={errors.password != null}
          helperText={errors.password != null ? errors.password.message : null}
          {...register("password", {
            required: {
              value: true,
              message: "Please enter a password.",
            },
            minLength: {
              value: 8,
              message: "Please enter a stronger password.",
            },
          })}
        />
        {enableConfirmation && (
          <TextField
            variant="outlined"
            id="code"
            label="Verification Code"
            type="text"
            error={errors.code != null}
            helperText={errors.code != null ? errors.code.message : null}
            {...register("code", {
              required: {
                value: true,
                message: "Please enter an authentication code.",
              },
              minLength: {
                value: 6,
                message: "Your verification code is 6 characters long.",
              },
              maxLength: {
                value: 6,
                message: "Your verification code is 6 characters long.",
              },
            })}
          />
        )}
        <Button variant="contained" type="submit">
          {enableConfirmation ? "Confirm Code" : "Sign Up"}
        </Button>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert onClose={handleSnackbarClose} severity="error">
          {registrationError}
        </Alert>
      </Snackbar>
    </form>
  );
}
