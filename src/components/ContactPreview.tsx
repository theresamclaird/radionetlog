import React, { type ReactElement } from "react";
import { Typography, Box } from "@mui/material";
import LineItem from "./LineItem";
import { type Contact } from "../API";

interface Props {
  contact: Contact;
}

export default function ContactPreview({ contact }: Props): ReactElement {
  console.log(contact);

  const applesauce = (prefix: string, value: string) =>
    typeof value === "string" ? `${prefix}${value}` : prefix;

  let label: string = applesauce("", `${contact.callSign.toUpperCase()}: `);
  label = applesauce(label, contact.name);
  label = applesauce(label, `, ${contact.location}`);

  return (
    <LineItem label={label}>
      <Box sx={{ p: 1 }}>
        <Typography>Contact Details</Typography>
      </Box>
    </LineItem>
  );
}
