import React, { type ReactElement } from "react";
import Paper from "@mui/material/Paper";
import { type SxProps } from "@mui/material/styles";

interface Props {
  sx?: SxProps;
  children: ReactElement | ReactElement[];
}

export default function Slat({ children, sx = {} }: Props) {
  return (
    <Paper elevation={2} sx={{ p: 4, ...sx }}>
      {children}
    </Paper>
  );
}
