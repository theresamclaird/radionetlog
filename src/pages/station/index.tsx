import React from "react";
import Grid from "@mui/material/Grid";
import StationForm from "../../components/Station/StationForm";
import StationList from "../../components/Station/StationList";

export default function Station() {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <StationForm
          station={{
            callSign: "",
            name: "",
            qth: "",
            notes: "",
            attributes: [],
          }}
        />
      </Grid>
      <Grid item>
        <StationList />
      </Grid>
    </Grid>
  );
}
