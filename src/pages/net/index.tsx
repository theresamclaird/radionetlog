import React, { type ReactElement } from "react";
import { Grid } from "@mui/material";
import NetList from "../../components/Net/NetList";
import NetForm from "../../components/Net/NetForm";
import Slat from "../../components/Slat";

export default function UserHome(): ReactElement {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Slat>
          <NetForm />
        </Slat>
      </Grid>
      <Grid item>
        <NetList />
      </Grid>
    </Grid>
  );
}
