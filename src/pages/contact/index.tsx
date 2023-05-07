import React from "react";
import Grid from "@mui/material/Grid";
import ContactForm from "../../components/Contact/ContactForm";
import ContactList from "../../components/Contact/ContactList";

export default function Station() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ContactForm contact={{ type: "qso", callSign: "" }} />
      </Grid>
      <Grid item>
        <ContactList />
      </Grid>
    </Grid>
  );
}
