import { type ReactElement } from "react";
import Head from "next/head";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { Auth } from "aws-amplify";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useUser } from "../context/AuthContext";
import Slat from "../components/Slat";

// TODO: Add change password, update email address.
// TODO: Add preamble and closing scripts.

interface IFormInput {
  oldPassword: string;
  newPassword: string;
}

export default function Account(): ReactElement {
  const { user, username, email } = useUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await Auth.changePassword(user, data.oldPassword, data.newPassword);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>{username}</title>
      </Head>
      <main>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Slat>
              <>
                <Typography>{`Username: ${
                  username !== null ? username : "UNKNOWN"
                }`}</Typography>
                <Typography>{`Email Address: ${
                  email !== null ? email : "UNKNOWN"
                }`}</Typography>
              </>
            </Slat>
          </Grid>
          <Grid item>
            <Slat>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography>Preamble Script:</Typography>
                </Grid>
                <Grid item>
                  <Typography>Hello, it is time for the net!</Typography>
                </Grid>
              </Grid>
            </Slat>
          </Grid>
          <Grid item>
            <Slat>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography>Closing Script:</Typography>
                </Grid>
                <Grid item>
                  <Typography>Thank you for participating!</Typography>
                </Grid>
              </Grid>
            </Slat>
          </Grid>
          <Grid item>
            <Slat>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography>Change Password:</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      id="oldPassword"
                      label="Old Password"
                      type="password"
                      error={errors.oldPassword != null}
                      helperText={
                        errors.oldPassword != null
                          ? errors.oldPassword.message
                          : null
                      }
                      {...register("oldPassword", {
                        required: {
                          value: true,
                          message: "Please enter your old password.",
                        },
                      })}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      id="newPassword"
                      label="New Password"
                      type="password"
                      error={errors.newPassword != null}
                      helperText={
                        errors.newPassword != null
                          ? errors.newPassword.message
                          : null
                      }
                      {...register("newPassword", {
                        required: {
                          value: true,
                          message: "Please enter a new password.",
                        },
                      })}
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Slat>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
