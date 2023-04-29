import React from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useUser } from "../../context/AuthContext";
import PopperMenu from "../PopperMenu";

export default function ContextMenu() {
  const { username } = useUser();
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
            onClick={handleOnClick}
          >
            <MenuIcon />
          </IconButton>
        );
      }}
    >
      <MenuList>
        <MenuItem component={Link} href="/contact">
          Contacts
        </MenuItem>
        <MenuItem component={Link} href="/net">
          Nets
        </MenuItem>
        <MenuItem component={Link} href="/station">
          Stations
        </MenuItem>
        <MenuItem component={Link} href="/script">
          Scripts
        </MenuItem>
      </MenuList>
    </PopperMenu>
  );
}
