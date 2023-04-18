import React, { type ReactElement, useState } from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { Delete, ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
  label: string | ReactElement;
  children: ReactElement;
}

export default function LineItem({ label, children }: Props): ReactElement {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
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
            <Typography>{label}</Typography>
          </Box>
          <IconButton>
            <Delete />
          </IconButton>
        </Box>
      </Grid>
      {expanded && children}
    </Grid>
  );
}
