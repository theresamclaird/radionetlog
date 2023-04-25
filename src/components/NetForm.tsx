import React, { type ReactElement, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { type CreateNetMutation } from "../API";
import { createNet } from "../graphql/mutations";
import RoundForm from "./RoundForm";

export default function NetForm(): ReactElement {
  const [netId, setNetId] = useState<string | null>(null);

  const createNewNet = async (): Promise<string> => {
    try {
      const newNet = (await API.graphql({
        query: createNet,
        variables: { input: {} },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as {
        data: CreateNetMutation;
        errors: any[];
      };

      const newNetId = newNet?.data?.createNet?.id as string;
      setNetId(newNetId);
      return newNetId;
    } catch (error) {
      console.warn(error);
      throw new Error(error);
    }
  };

  const handleAddClick = () => {
    createNewNet().catch((error) => {
      console.warn(error);
    });
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <RoundForm netId={netId} />
      </Grid>
      <Grid item>
        <Button disabled={netId !== null} onClick={handleAddClick}>
          New Net
        </Button>
      </Grid>
    </Grid>
  );
}
