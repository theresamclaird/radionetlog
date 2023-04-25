import { type ReactElement } from "react";
import Head from "next/head";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Auth } from "aws-amplify";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useUser } from "../context/AuthContext";

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
            <Card>
              <CardContent>
                <Typography>{`Username: ${
                  username !== null ? username : "UNKNOWN"
                }`}</Typography>
                <Typography>{`Email Address: ${
                  email !== null ? email : "UNKNOWN"
                }`}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Card>
                <CardContent>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <Typography variant="h1">Change Password</Typography>
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
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
