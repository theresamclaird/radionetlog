import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useUser } from "../context/AuthContext";

const StatusBar = () => {
  const { user } = useUser();
  const username = user === null ? "" : user.getUsername();
  const [anchorEl] = useState(null);

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
        ></Menu>
        <Typography sx={{ flexGrow: 1 }}></Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
          }}
        ></Box>
        <Typography>{username}</Typography>
        <IconButton
          size="large"
          aria-label="qrz account"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default StatusBar;
