import React, { type ReactElement } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LineItem from "./LineItem";
import { type Net, type Round, type Contact } from "../API";
import RoundPreview from "./RoundPreview";

interface Props {
  net: Net;
}

export default function NetPreview({ net }: Props): ReactElement {
  const d = new Date(net.createdAt);
  const locale = navigator?.languages[0];
  const netTime = d.toLocaleString(locale !== null ? locale : "en-US", {
    hour12: false,
    dateStyle: "short",
    timeStyle: "short",
  });
  const rounds: Array<Round | null> =
    net?.rounds != null ? net.rounds.items : [];
  const contactsCount: number = rounds.reduce((total: number, round: any) => {
    const contacts: Contact[] =
      round.contacts !== null ? round.contacts?.items : [];
    return total + (contacts != null ? contacts.length : 0);
  }, 0);
  const label = (
    <Typography>{`${netTime} (${rounds.length}
                ${rounds.length === 1 ? "round" : "rounds"}, ${contactsCount}
                ${contactsCount === 1 ? "contact" : "contacts"})`}</Typography>
  );

  return (
    <LineItem disabled={rounds.length < 1} label={label}>
      <Grid container direction="column" sx={{ my: 1 }}>
        {rounds.map((round, index) => (
          <Grid item key={round?.id}>
            <RoundPreview index={index + 1} round={round as Round} />
          </Grid>
        ))}
      </Grid>
    </LineItem>
  );
}
