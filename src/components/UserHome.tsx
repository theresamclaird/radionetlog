import React, { type ReactElement } from "react";
import { Grid } from "@mui/material";
import NetsList from "../components/NetsList";
import NetForm from "./NetForm";
import Slat from "./Slat";

export default function UserHome(): ReactElement {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Slat>
          <NetForm />
        </Slat>
      </Grid>
      <Grid item>
        <NetsList />
      </Grid>
    </Grid>
  );
}
