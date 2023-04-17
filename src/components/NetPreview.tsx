import React, { type ReactElement } from "react";
import { Typography } from "@mui/material";
import { type Net } from "../API";

interface Props {
  net: Net;
}

export default function NetPreview({ net }: Props): ReactElement {
  return <Typography>Net Preview</Typography>;
}
