import React, { type ReactElement, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { GRAPHQL_AUTH_MODE, type GraphQLSubscription } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import {
  type GetNetQuery,
  type OnUpdateNetSubscription,
  type Net,
  type Contact,
  type Round,
} from "../../API";
import { getNet } from "../../graphql/queries";
import { onUpdateNet } from "../../graphql/subscriptions";
import Accordion from "../Accordion";
import RoundPreview from "../Round/RoundPreview";

interface Props {
  netId: string;
}

export default function NetPreview({ netId }: Props): ReactElement | null {
  const [net, setNet] = useState<Net | null>(null);
  const fetchNet = async (): Promise<Net | null> => {
    if (netId === null) {
      return null;
    }

    const netData = (await API.graphql({
      query: getNet,
      variables: { id: netId },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as {
      data: GetNetQuery;
      errors: any[];
    };

    if (netData?.errors?.length > 0) {
      setNet(null);
      return null;
    }

    const fetchedNet = netData?.data?.getNet as Net;
    setNet(fetchedNet);
    return fetchedNet;
  };

  useEffect(() => {
    const sub = API.graphql<GraphQLSubscription<OnUpdateNetSubscription>>({
      ...graphqlOperation(onUpdateNet),
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }).subscribe({
      next: () => {
        fetchNet().catch((error) => {
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
    fetchNet().catch((error) => {
      console.warn(error);
    });
  }, [netId]);

  if (net === null) {
    return null;
  }

  const d = new Date(net.createdAt);
  const locale = navigator?.languages[0];
  const netTime = d.toLocaleString(locale !== null ? locale : "en-US", {
    hour12: false,
    dateStyle: "short",
    timeStyle: "short",
  });
  const rounds: Array<Round | null> =
    net?.rounds != null ? net.rounds.items : [];
  const contactsCount: number = rounds.reduce((total: number, round: any) => {
    const contacts: Contact[] =
      round.contacts !== null ? round.contacts?.items : [];
    return total + (contacts != null ? contacts.length : 0);
  }, 0);
  const label = (
    <Typography>{`${netTime} (${rounds.length}
                ${rounds.length === 1 ? "round" : "rounds"}, ${contactsCount}
                ${contactsCount === 1 ? "contact" : "contacts"})`}</Typography>
  );

  return (
    <Accordion disabled={rounds.length < 1} label={label}>
      <Grid container direction="column" sx={{ my: 1 }}>
        {rounds.map((round, index) => {
          if (round === null || round.id === null) {
            return null;
          }
          return (
            <Grid item key={round?.id}>
              <RoundPreview index={index + 1} roundId={round?.id} />
            </Grid>
          );
        })}
      </Grid>
    </Accordion>
  );
}
