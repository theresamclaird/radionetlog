import React, { type ReactElement } from "react";
import Paper from "@mui/material/Paper";

interface Props {
  children: ReactElement | null;
}

export default function Slat({ children }: Props) {
  return (
    <Paper elevation={2} sx={{ padding: 2 }}>
      {children}
    </Paper>
  );
}
