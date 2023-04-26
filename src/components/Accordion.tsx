import React, { type ReactElement, useState } from "react";
import { Grid, Box, IconButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
  expanded?: boolean;
  disabled?: boolean;
  label: string | ReactElement;
  children: ReactElement;
}

export default function Accordion({
  expanded = false,
  disabled = false,
  label,
  children,
}: Props): ReactElement {
  const [currentlyExpanded, setCurrentlyExpanded] = useState<boolean>(expanded);

  return (
    <Grid container direction="column">
      <Grid item>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
            width: "100%",
          }}
        >
          <IconButton
            disabled={disabled}
            onClick={() => {
              setCurrentlyExpanded(!currentlyExpanded);
            }}
          >
            {currentlyExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          <Box sx={{ flex: 1 }}>{label}</Box>
        </Box>
      </Grid>
      {currentlyExpanded && children}
    </Grid>
  );
}
