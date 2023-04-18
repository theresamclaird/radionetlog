import React, { type ReactElement } from "react";
import { Grid } from "@mui/material";
import LineItem from "./LineItem";
import ContactPreview from "./ContactPreview";
import { type Round, type Contact } from "../API";

interface Props {
  index: number;
  round: Round;
}

export default function RoundPreview({ index, round }: Props): ReactElement {
  const d = new Date(round.createdAt);
  const locale = navigator?.languages[0];
  const roundTime = d.toLocaleTimeString(locale !== null ? locale : "en-US", {
    hour12: false,
    timeStyle: "short",
  });

  const contacts: Array<Contact | null> =
    round?.contacts != null ? round.contacts.items : [];

  const contactsCount: number =
    round.contacts !== null && round.contacts !== undefined
      ? round.contacts.items.length
      : 0;

  const label = `Round ${index}: ${roundTime} (${contactsCount} ${
    contactsCount === 1 ? "contact" : "contacts"
  })`;

  return (
    <LineItem label={label}>
      <Grid item container direction="column">
        {contacts.map((contact) => (
          <Grid item key={contact?.id} sx={{ my: 1 }}>
            <ContactPreview contact={contact as Contact} />
          </Grid>
        ))}
      </Grid>
    </LineItem>
  );
}
