import React, { type ReactElement } from "react";
import Head from "next/head";
import { useUser } from "../context/AuthContext";
import VisitorHome from "../components/VisitorHome";
import UserHome from "../components/UserHome";

export default function Home(): ReactElement {
  const { isLoggedIn } = useUser();

  return (
    <div>
      <Head>
        <title>Net Logbook</title>
      </Head>
      <main>{isLoggedIn ? <UserHome /> : <VisitorHome />}</main>
    </div>
  );
}
