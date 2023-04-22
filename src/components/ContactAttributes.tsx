import React, { type ReactElement } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

interface Attribute {
  key: string;
  label: string | ReactElement;
  value: boolean;
}

interface Props {
  attributes: Attribute[];
  setAttributes: React.Dispatch<React.SetStateAction<string>>;
}

export default function ContactAttributes({
  attributes,
  setAttributes,
}: Props) {
  const value = attributes.reduce((values, attribute) => {
    const newValue: any = { ...values };
    newValue[attribute.key] = attribute.value;

    return newValue;
  }, {});

  return (
    <ToggleButtonGroup
      color="primary"
      size="small"
      value={value}
      aria-label="in-and-out and mobile attributes"
      onChange={(e, updatedAttributes) => {
        setAttributes(updatedAttributes);
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          e.preventDefault(); // Enter is handled by the calling component.
        }
      }}
    >
      {attributes.map((attribute: Attribute) => (
        <ToggleButton
          key={attribute.key}
          value={attribute.key}
          aria-label={attribute.key}
        >
          {attribute.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
