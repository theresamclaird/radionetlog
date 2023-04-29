import React from "react";
import { IconButton, MenuList, MenuItem, Link } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Auth } from "aws-amplify";
import { useUser } from "../../context/AuthContext";
import PopperMenu from "../PopperMenu";
import { useRouter } from "next/router";

export default function AccountMenu() {
  const { username } = useUser();
  const router = useRouter();

  async function signOut() {
    try {
      await Auth.signOut();
      void router.push("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return (
    <PopperMenu
      renderTrigger={(handleOnClick) => {
        return (
          <IconButton
            disabled={username === null}
            size="large"
            aria-label="account menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={(event) => {
              handleOnClick(event);
            }}
          >
            <AccountCircle />
          </IconButton>
        );
      }}
    >
      <MenuList>
        <MenuItem component={Link} href="/account">
          {`Account (${username === null ? "UNKNOWN" : username})`}
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            signOut().catch((error) => {
              console.error(error);
            });
          }}
        >
          Sign Out
        </MenuItem>
      </MenuList>
    </PopperMenu>
  );
}
