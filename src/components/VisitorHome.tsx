import React, { type ReactElement } from "react";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export default function VisitorHome(): ReactElement {
  return (
    <Typography key={uuidv4()}>
      Welcome. You must sign in to use this service.
    </Typography>
  );
}
