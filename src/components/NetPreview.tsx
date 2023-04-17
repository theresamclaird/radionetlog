import React, { type ReactElement } from "react";
import { Typography } from "@mui/material";
import { type Net } from "../API";

interface Props {
  net: Net;
}

export default function NetPreview({ net }: Props): ReactElement {
  console.log("net", net);
  return <Typography>Net Preview</Typography>;
}
