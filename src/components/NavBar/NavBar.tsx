import React from "react";
import { Box, AppBar, Toolbar, Link } from "@mui/material";
import AccountMenu from "./AccountMenu";
import ContextMenu from "./ContextMenu";

export default function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <ContextMenu />
        <Link href="/" sx={{ flexGrow: 1, color: "#fff" }}>
          Net Logbook
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <AccountMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
