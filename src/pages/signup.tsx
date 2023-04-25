import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Snackbar,
  Typography,
} from "@mui/material";
import { useUser } from "../context/AuthContext";
import { Auth } from "aws-amplify";
import { type CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  email: string;
  password: string;
  code: string;
}

export default function Signup() {
  const { user } = useUser();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const [showCode, setShowCode] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  async function signUpWithEmailAndPassword(
    data: IFormInput
  ): Promise<CognitoUser> {
    // Sign the user up using Auth.signUp().
    const { username, password, email } = data;

    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log("Signed up a user:", user);
    return user;
  }

  type AmplifyUser = CognitoUser | null;

  async function confirmSignUp(data: IFormInput) {
    /*
    1. confirm signup code using Auth.confirmSignUp() which attempts confirmation with aws-amplify.
    2. Log the user in with Auth.signIn().
    3. Navigate the user to the homepage with router.push("/").
    TODO: Implement resend confirmation code using Auth.resendSignUp().
    */
    const { username, password, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser: AmplifyUser = await Auth.signIn(username, password);
      console.log("amplifyUser");
      if (amplifyUser != null) {
        console.log("Successfully signed in a user:", amplifyUser);
        void router.push("/");
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      if (showCode) {
        await confirmSignUp(data);
      } else {
        await signUpWithEmailAndPassword(data);
        // TODO What happens when Auth.signUp() fails? Also, does signUpWithEmailAndPassword need to return a user?
        setShowCode(true);
      }
    } catch (error) {
      console.error(error);
      setSignUpError(error?.message);
      setOpen(true);
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  console.log("The value of the user from the hook is:", user);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h1">Sign Up</Typography>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                id="username"
                label="Username"
                type="text"
                fullWidth
                error={errors.username != null}
                helperText={
                  errors.username != null ? errors.username.message : null
                }
                {...register("username", {
                  required: {
                    value: true,
                    message: "Please enter a username.",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter a username between 3-16 characters.",
                  },
                  maxLength: {
                    value: 16,
                    message: "Please enter a username between 3-16 characters.",
                  },
                })}
              />
            </Grid>

            <Grid item>
              <TextField
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                fullWidth
                error={errors.email != null}
                helperText={errors.email != null ? errors.email.message : null}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter a valid email.",
                  },
                })}
              />
            </Grid>

            <Grid item>
              <TextField
                variant="outlined"
                id="password"
                label="Password"
                type="password"
                fullWidth
                error={errors.password != null}
                helperText={
                  errors.password != null ? errors.password.message : null
                }
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
            </Grid>

            {showCode && (
              <Grid item>
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
              </Grid>
            )}
          </Grid>
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit">
            {showCode ? "Confirm Code" : "Sign Up"}
          </Button>
        </CardActions>
      </Card>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="error">
          {signUpError}
        </Alert>
      </Snackbar>
    </form>
  );
}
