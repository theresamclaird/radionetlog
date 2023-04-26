import React, { type ReactElement } from "react";
import Box from "@mui/material/Box";
import { type SxProps } from "@mui/material/styles";
import Slat from "./Slat";

interface Props {
  leftContent: ReactElement | null;
  rightContent: ReactElement | null;
  sx?: SxProps;
}

export default function VisitorHome({
  leftContent,
  rightContent,
  sx = {},
}: Props): ReactElement {
  return (
    <Slat
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 12,
      }}
    >
      <Box sx={{ flex: 1 }}>{leftContent}</Box>
      <Box sx={{ flex: 1 }}>{rightContent}</Box>
    </Slat>
  );
}
