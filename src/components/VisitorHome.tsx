import React, { type ReactElement } from "react";
import SignIn from "./SignIn";
import RegistrationForm from "./RegistrationForm";
import SlatFiftyFifty from "./SlatFiftyFifty";

export default function VisitorHome(): ReactElement {
  return (
    <SlatFiftyFifty
      leftContent={<RegistrationForm />}
      rightContent={<SignIn />}
    />
  );
}
