import React, { type ReactElement, useState, useRef } from "react";
import {
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import {
  Check,
  CheckBoxOutlineBlank,
  DirectionsCar,
  Language,
  PublishedWithChanges,
} from "@mui/icons-material";
import LineItem from "./LineItem";
import ContactAttributes from "./ContactAttributes";
import { type Contact } from "../API";

interface Props {
  contact: Contact;
}

export default function ContactPreview({ contact }: Props): ReactElement {
  const [reportComplete, setReportComplete] = useState<string[]>(
    contact.reportCompleted ? ["reportCompleted"] : []
  );
  const [notes, setNotes] = useState<string>("");
  const [spouse, setSpouse] = useState<string>("");
  const spouseRef = useRef(null);
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
      <ContactAttributes
        attributes={[
          { key: "inAndOut", value: false, label: "I/O" },
          { key: "mobile", value: false, label: <DirectionsCar /> },
          { key: "internet", value: false, label: <Language /> },
          { key: "recheck", value: false, label: <PublishedWithChanges /> },
        ]}
        setAttributes={() => null}
      />
      <Typography
        sx={{ flex: 1 }}
      >{`${contact.name}, ${contact.location}`}</Typography>
    </Box>
  );

  return (
    <LineItem label={label}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 2,
          px: 6,
          pt: 3,
        }}
      >
        <Box>
          <TextField
            sx={{ width: "100%" }}
            autoFocus
            label="Spouse"
            value={spouse}
            inputRef={spouseRef}
            variant="outlined"
            size="small"
            onChange={(e) => {
              setSpouse(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Typography>Notes:</Typography>
          <TextareaAutosize
            autoFocus
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            style={{ width: "100%", height: "5rem" }}
          />
        </Box>
      </Box>
    </LineItem>
  );
}
