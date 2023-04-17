import React, { type ReactElement, useState } from "react";
import { Paper, Grid, Box, IconButton, Typography } from "@mui/material";
import { Delete, ExpandLess, ExpandMore } from "@mui/icons-material";
import { type Net } from "../API";

interface Props {
  net: Net;
}

export default function NetPreview({ net }: Props): ReactElement {
  const [expanded, setExpanded] = useState<boolean>(false);

  console.log(net);

  const d = new Date(net.createdAt);
  const locale = navigator?.languages[0];
  const netTime = d.toLocaleString(locale !== null ? locale : "en-US", {
    hour12: false,
    dateStyle: "short",
    timeStyle: "short",
  });

  const rounds = net?.rounds?.items != null ? net.rounds.items : [];
  const roundsCount: number = rounds.length;
  const contactsCount: number = rounds.reduce((total: number, round) => {
    const contacts = round?.contacts?.items;
    return total + (contacts != null ? contacts.length : 0);
  }, 0);

  return (
    <Paper elevation={2} sx={{ padding: 1 }}>
      <Grid container direction="column">
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                {expanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
              <Typography>
                {`${netTime} (${roundsCount}
                ${roundsCount === 1 ? "round" : "rounds"}, ${contactsCount}
                ${contactsCount === 1 ? "contact" : "contacts"})`}
              </Typography>
            </Box>
            <IconButton>
              <Delete />
            </IconButton>
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Paper>
  );
}
