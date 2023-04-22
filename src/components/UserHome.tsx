import React, { type ReactElement } from "react";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import NetsList from "../components/NetsList";
import NetForm from "../components/NetForm";

export default function UserHome(): ReactElement {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <NetForm key={uuidv4()} />
      </Grid>
      <Grid item>
        <NetsList key={uuidv4()} />
      </Grid>
    </Grid>
  );
}
