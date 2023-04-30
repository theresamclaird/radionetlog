import React, { type ReactElement } from "react";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API } from "aws-amplify";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Language from "@mui/icons-material/Language";
import Delete from "@mui/icons-material/Delete";
import PublishedWithChanges from "@mui/icons-material/PublishedWithChanges";
import { type Contact } from "../../API";
import { deleteContact } from "../../graphql/mutations";

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

  const deleteContactById = async (id: string) => {
    try {
      await API.graphql({
        query: deleteContact,
        variables: { input: { id } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Grid
      container
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={1.5}>
        <Typography>{contactTime}</Typography>
      </Grid>

      <Grid item xs={1.25}>
        <Typography>{contact.callSign}</Typography>
      </Grid>

      <Grid item xs={1.5}>
        <Typography>{contact.name}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography>{contact.qth}</Typography>
      </Grid>

      <Grid item xs={1}>
        <Typography>{contact.reportSent}</Typography>
      </Grid>

      <Grid
        item
        xs={2.25}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 1,
        }}
      >
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
        <IconButton
          onClick={() => {
            deleteContactById(contact.id).catch((error) => {
              console.warn(error);
            });
          }}
        >
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  );
}
