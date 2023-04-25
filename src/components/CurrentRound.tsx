import React, { type ReactElement, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { GRAPHQL_AUTH_MODE, type GraphQLSubscription } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { v4 } from "uuid";
import {
  type Round,
  type GetRoundQuery,
  type OnCreateContactSubscription,
} from "../API";
import { getRound } from "../graphql/queries";
import { onCreateContact } from "../graphql/subscriptions";

interface Props {
  roundId: string;
}

export default function CurrentRound({ roundId }: Props): ReactElement {
  const [round, setRound] = useState<Round | null>(null);

  const fetchRound = async (): Promise<Round | null> => {
    if (roundId === null) {
      return null;
    }
    const roundData = (await API.graphql({
      query: getRound,
      variables: { id: roundId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as {
      data: GetRoundQuery;
      errors: any[];
    };

    if (roundData?.errors?.length > 0) {
      setRound(null);
      return null;
    }

    const fetchedRound = roundData?.data?.getRound as Round;
    setRound(fetchedRound);
    return fetchedRound;
  };

  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<OnCreateContactSubscription>>({
      ...graphqlOperation(onCreateContact),
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }).subscribe({
      next: () => {
        console.log("next");
        fetchRound().catch((error) => {
          console.warn(error);
        });
      },
      error: (error) => {
        console.warn(error);
      },
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetchRound().catch((error) => {
      console.warn(error);
    });
  }, [roundId]);

  console.log(round?.contacts);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>{`round: ${round === null ? "null" : round.createdAt}`}</Grid>
      <Grid item>{`${
        round === null || round?.contacts?.items?.length === undefined
          ? 0
          : round?.contacts?.items?.length
      } contacts`}</Grid>
      {round !== null &&
        Array.isArray(round?.contacts?.items) &&
        round?.contacts?.items.map((contact) => {
          return (
            <Grid item key={v4()}>
              {contact?.callSign}
            </Grid>
          );
        })}
    </Grid>
  );
}
