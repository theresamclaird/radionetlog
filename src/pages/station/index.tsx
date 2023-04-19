import React from "react";
import StationForm from "../../components/StationForm";

export default function Station() {
  return (
    <StationForm
      station={{
        callSign: "",
        name: "",
        location: "",
        notes: "",
        attributes: [],
      }}
    />
  );
}
