import React from "react";
import Grid from "@mui/material/Grid";
import StationForm from "../../components/StationForm";

export default function Station() {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <StationForm
          station={{
            callSign: "",
            name: "",
            location: "",
            notes: "",
            attributes: [],
          }}
        />
      </Grid>
      <Grid item>Stations List</Grid>
    </Grid>
  );
}
