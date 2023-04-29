import React, { type ReactElement } from "react";
import Head from "next/head";
import SignIn from "../components/Account/SignIn";
import RegistrationForm from "../components/Account/RegistrationForm";
import SlatFiftyFifty from "../components/SlatFiftyFifty";

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Net Logbook</title>
      </Head>
      <main>
        <SlatFiftyFifty
          leftContent={<RegistrationForm />}
          rightContent={<SignIn />}
        />
      </main>
    </div>
  );
}
