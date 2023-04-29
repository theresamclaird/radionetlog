import React, { type ReactElement } from "react";
import Box from "@mui/material/Box";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography sx={{ minWidth: "5rem" }}>{contact.callSign}</Typography>
      <Typography sx={{ minWidth: "9rem" }}>{contactTime}</Typography>
      <Typography sx={{ minWidth: "10rem" }}>{contact.name}</Typography>
      <Typography sx={{ minWidth: "10rem" }}>{contact.location}</Typography>
      <ToggleButtonGroup
        color="primary"
        size="small"
        aria-label="contact attributes"
        value={contact.attributes}
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
    </Box>
  );
}
