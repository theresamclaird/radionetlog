import React, { type ReactElement, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import { type GraphQLSubscription, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import NetPreview from "./NetPreview";
import {
  type Net,
  type ListNetsQuery,
  type OnCreateNetSubscription,
} from "../../API";
import { deleteNet } from "../../graphql/mutations";
import { onCreateNet } from "../../graphql/subscriptions";
import Slat from "../Slat";

const netsQuery = `
  query AllNets($filter: ModelNetFilterInput, $limit: Int, $nextToken: String) {
    listNets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rounds {
          items {
            id
            owner
            createdAt
            contacts {
              items {
                id
                createdAt
                callSign
                name
                location
                attributes
              }
            }
          }
        }
        owner
        createdAt
        updatedAt
      }
    }
  }
`;

export default function NetList(): ReactElement {
  const [nets, setNets] = useState<Net[]>([]);

  const fetchNetsFromApi = async (): Promise<Net[]> => {
    try {
      const allNets = (await API.graphql({
        query: netsQuery,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as {
        data: ListNetsQuery;
        errors: any[];
      };

      setNets(allNets?.data?.listNets?.items as Net[]);
      return allNets?.data?.listNets?.items as Net[];
    } catch (error) {
      console.error(error);
    }

    return [];
  };

  useEffect(() => {
    fetchNetsFromApi().catch((error) => {
      console.error(error);
    });

    try {
      const sub = API.graphql<GraphQLSubscription<OnCreateNetSubscription>>({
        ...graphqlOperation(onCreateNet),
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      }).subscribe({
        next: ({ provider, value }) => {
          fetchNetsFromApi().catch((error) => {
            console.warn(error);
          });
        },
        error: (error) => {
          console.warn(error);
        },
      });
      return () => {
        // Stop receiving data updates from the subscription
        sub.unsubscribe();
      };
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const deleteNetById = async (id: string) => {
    try {
      await API.graphql({
        query: deleteNet,
        variables: { input: { id } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      // re-fetch nets
      await fetchNetsFromApi();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container direction="column" spacing={2}>
      {nets.map((net) => (
        <Grid item key={net.id}>
          <Slat
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <NetPreview netId={net.id} />
            <IconButton
              onClick={() => {
                deleteNetById(net.id).catch((error) => {
                  console.warn(error);
                });
              }}
            >
              <Delete />
            </IconButton>
          </Slat>
        </Grid>
      ))}
    </Grid>
  );
}
