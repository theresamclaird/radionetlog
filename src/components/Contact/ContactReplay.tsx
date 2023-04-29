import React, { type ReactElement } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Language from "@mui/icons-material/Language";
import PublishedWithChanges from "@mui/icons-material/PublishedWithChanges";
import { type Contact } from "../../API";

interface Props {
  contact: Contact;
}

export default function ContactReplay({ contact }: Props): ReactElement {
  const d = new Date(contact.createdAt);
  const locale = navigator?.languages[0];
  const contactTime = d.toLocaleString(locale !== null ? locale : "en-US", {
    hour12: false,
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        item
        container
        xs={9}
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={2}>
          <Typography>{contactTime}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{contact.callSign}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{contact.name}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>{contact.location}</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography>{contact?.signalReport}</Typography>
        <ToggleButtonGroup
          color="primary"
          size="small"
          aria-label="contact attributes"
          value={contact.attributes}
          sx={{ float: "right" }}
        >
          <ToggleButton value="inAndOut" aria-label="in-and-out">
            I/O
          </ToggleButton>
          <ToggleButton value="mobile" aria-label="mobile">
            <DirectionsCar />
          </ToggleButton>
          <ToggleButton value="internet" aria-label="internet">
            <Language />
          </ToggleButton>
          <ToggleButton value="recheck" aria-label="recheck">
            <PublishedWithChanges />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
