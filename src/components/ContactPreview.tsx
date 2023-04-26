import React, { type ReactElement, useState } from "react";
import {
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { Check, CheckBoxOutlineBlank } from "@mui/icons-material";
import Accordion from "./Accordion";
import { type Contact } from "../API";

interface Props {
  contact: Contact;
}

export default function ContactPreview({ contact }: Props): ReactElement {
  const [reportComplete, setReportComplete] = useState<string[]>(
    contact.reportCompleted ? ["reportCompleted"] : []
  );
  const label = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3,
      }}
    >
      <ToggleButtonGroup
        size="small"
        value={reportComplete}
        aria-label="station has completed their report."
        onChange={(e, values) => {
          setReportComplete(values);
        }}
      >
        <ToggleButton value="reportCompleted">
          {reportComplete.includes("reportCompleted") ? (
            <Check />
          ) : (
            <CheckBoxOutlineBlank />
          )}
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography sx={{ minWidth: "5rem" }}>
        {contact.callSign.toUpperCase()}
      </Typography>
      <Typography
        sx={{ flex: 1 }}
      >{`${contact.name}, ${contact.location}`}</Typography>
    </Box>
  );

  return (
    <Accordion label={label}>
      <Typography>Contact Details</Typography>
    </Accordion>
  );
}
