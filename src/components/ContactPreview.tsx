import React, { type ReactElement } from "react";
import { Typography } from "@mui/material";
import LineItem from "./LineItem";
import { type Contact } from "../API";

interface Props {
  contact: Contact;
}

export default function ContactPreview({ contact }: Props): ReactElement {
  console.log(contact);
  return (
    <LineItem label={contact.callSign}>
      <Typography>Contact Details</Typography>
    </LineItem>
  );
}
