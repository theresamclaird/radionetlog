import React, { type ReactElement, useState } from "react";
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
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import PublishedWithChanges from "@mui/icons-material/PublishedWithChanges";
import { type Contact } from "../../API";
import { deleteContact } from "../../graphql/mutations";
import ContactReplayForm from "./ContactReplayForm";

interface Props {
  contact: Contact;
}

export default function ContactReplay({ contact }: Props): ReactElement {
  const { id, createdAt, callSign, name, qth, attributes } = contact;
  const [expand, setExpand] = useState(false);

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

  const d = new Date(createdAt);
  const locale = navigator?.languages[0];
  const contactTime = d.toLocaleString(locale !== null ? locale : "en-US", {
    hour12: false,
    dateStyle: "short",
    timeStyle: "short",
  });
  return (
    <Grid item container direction="row" spacing={1} alignItems="start">
      <Grid item xs={1} md={0.6} sx={{ textAlign: "left" }}>
        <IconButton
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Grid>

      <Grid item xs={10} md={10.8}>
        {expand ? (
          <ContactReplayForm contact={contact} />
        ) : (
          <Grid container direction="column" spacing={1}>
            <Grid
              item
              container
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={3} md={2}>
                <Typography>{contactTime}</Typography>
              </Grid>

              <Grid item xs={3} md={2}>
                <Typography>{callSign}</Typography>
              </Grid>

              <Grid item xs={6} md={3}>
                <Typography>{name}</Typography>
              </Grid>

              <Grid item xs={6} md={2.5}>
                <Typography>{qth}</Typography>
              </Grid>

              <Grid item xs={6} md={2.5} sx={{ textAlign: "right" }}>
                <ToggleButtonGroup
                  color="primary"
                  size="small"
                  aria-label="contact attributes"
                  value={attributes}
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
          </Grid>
        )}
      </Grid>

      <Grid item xs={1} md={0.6} sx={{ textAlign: "right" }}>
        <IconButton
          onClick={() => {
            deleteContactById(id).catch((error) => {
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

/*

  completedAt: String
  roundId: ID

  */
