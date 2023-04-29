import React, { type ReactElement, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { GRAPHQL_AUTH_MODE, type GraphQLSubscription } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import {
  type Round,
  type Contact,
  type GetRoundQuery,
  type OnCreateContactSubscription,
} from "../../API";
import { getRound } from "../../graphql/queries";
import { onCreateContact } from "../../graphql/subscriptions";
import Accordion from "../Accordion";
import ContactPreview from "../Contact/ContactReplay";

interface Props {
  index?: number;
  roundId: string;
  expanded?: boolean;
}

export default function RoundPreview({
  index = 0,
  roundId,
  expanded = false,
}: Props): ReactElement | null {
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

  if (round === null) {
    return null;
  }

  const d = new Date(round.createdAt);
  const locale = navigator?.languages[0];
  const roundTime = d.toLocaleTimeString(locale !== null ? locale : "en-US", {
    hour12: false,
    timeStyle: "short",
  });

  const contacts: Array<Contact | null> =
    round?.contacts != null ? round.contacts.items : [];

  const contactsCount: number =
    round.contacts !== null && round.contacts !== undefined
      ? round.contacts.items.length
      : 0;

  const label = `Round ${index}: ${roundTime} (${contactsCount} ${
    contactsCount === 1 ? "contact" : "contacts"
  })`;

  return (
    <Accordion label={label} expanded={expanded} disabled={true}>
      <Grid container direction="column">
        {contacts.map((contact) => (
          <Grid item key={contact?.id} sx={{ my: 1 }}>
            <ContactPreview contact={contact as Contact} />
          </Grid>
        ))}
      </Grid>
    </Accordion>
  );
}
