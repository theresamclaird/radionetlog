import React, { type ReactElement, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { type CreateRoundMutation, type CreateRoundInput } from "../API";
import { createRound } from "../graphql/mutations";
import CurrentRound from "./CurrentRound";
import ContactForm from "./ContactForm";

interface Props {
  netId: string | null;
}

export default function RoundForm({ netId }: Props): ReactElement {
  const [roundId, setRoundId] = useState<string | null>(null);

  const createRoundForNet = async (
    roundInput: CreateRoundInput
  ): Promise<string> => {
    const newRound = (await API.graphql({
      query: createRound,
      variables: { input: roundInput },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as {
      data: CreateRoundMutation;
      error: any[];
    };

    const newRoundId = newRound?.data?.createRound?.id as string;
    setRoundId(newRoundId);
    return newRoundId;
  };

  useEffect(() => {
    if (roundId === null && netId !== null) {
      createRoundForNet({ netId }).catch((error) => {
        console.warn(error);
      });
    }
  }, [netId]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ContactForm roundId={roundId} />
      </Grid>
      {roundId !== null && (
        <Grid item>
          <CurrentRound roundId={roundId} />
        </Grid>
      )}
    </Grid>
  );
}
