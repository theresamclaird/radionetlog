import React, { type ReactElement, useState } from "react";
import { Grid, Box, IconButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
  disabled?: boolean;
  label: string | ReactElement;
  children: ReactElement;
}

export default function LineItem({
  disabled = false,
  label,
  children,
}: Props): ReactElement {
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
              width: "100%",
            }}
          >
            <IconButton
              disabled={disabled}
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Box sx={{ flex: 1 }}>{label}</Box>
          </Box>
        </Box>
      </Grid>
      {expanded && !disabled && children}
    </Grid>
  );
}
