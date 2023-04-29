import { type ReactElement } from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material";
import { Auth } from "aws-amplify";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useUser } from "../context/AuthContext";
import SlatFiftyFifty from "../components/SlatFiftyFifty";

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
        <SlatFiftyFifty
          leftContent={
            <>
              <Typography variant="h2">Account</Typography>
              <List>
                <ListItem disableGutters>
                  <Typography>{`Call Sign: ${
                    username !== null ? username : "UNKNOWN"
                  }`}</Typography>
                </ListItem>
                <ListItem disableGutters>
                  <Typography>{`Email Address: ${
                    email !== null ? email : "UNKNOWN"
                  }`}</Typography>
                </ListItem>
              </List>
            </>
          }
          rightContent={
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Typography variant="h2">Change Password</Typography>
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
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          }
        />
      </main>
    </div>
  );
}
