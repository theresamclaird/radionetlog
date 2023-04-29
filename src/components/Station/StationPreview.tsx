import React, { useState } from "react";
// import Link from "next/link";
import {
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Edit,
  ExpandLess,
  ExpandMore,
  DirectionsCar,
  Language,
} from "@mui/icons-material";
import { type Station } from "../../API";

/*
TODO:
  - Add link to edit station.
*/

export interface Props {
  station: Station;
}

export default function StationPreview({ station }: Props) {
  const [showNotes, setShowNotes] = useState(false);
  const { callSign, name, location, attributes, notes } = station;

  return (
    <Grid container direction="row" spacing={2} alignItems="center">
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <IconButton
          disabled={notes === ""}
          onClick={() => {
            setShowNotes(!showNotes);
          }}
        >
          {showNotes ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Typography sx={{ flex: 1 }}>{callSign}</Typography>
        <Typography sx={{ flex: 2 }}>{name}</Typography>
        <Typography sx={{ flex: 2 }}>{location}</Typography>
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
        </ToggleButtonGroup>
        <IconButton href={`/station/${callSign}`}>
          <Edit />
        </IconButton>
      </Grid>
      {showNotes && <Grid item>{notes}</Grid>}
    </Grid>
  );
}
