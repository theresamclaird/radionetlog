import React, { type ReactElement, useState, useEffect } from "react";
import { Card, CardContent, Grid, IconButton } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";
import { type GraphQLSubscription } from "@aws-amplify/api";
import { Delete } from "@mui/icons-material";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import StationPreview from "../components/StationPreview";
import {
  type Station,
  type ListStationsQuery,
  type OnCreateStationSubscription,
} from "../API";
import { listStations } from "../graphql/queries";
import { deleteStation } from "../graphql/mutations";
import { onCreateStation } from "../graphql/subscriptions";

export default function Stations(): ReactElement {
  const [stations, setStations] = useState<Station[]>([]);

  const fetchStationsFromApi = async (): Promise<Station[]> => {
    try {
      const allStations = (await API.graphql({
        query: listStations,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as {
        data: ListStationsQuery;
        errors: any[];
      };

      setStations(allStations?.data?.listStations?.items as Station[]);
      return allStations?.data?.listStations?.items as Station[];
    } catch (error) {
      console.warn(error);
    }

    return [];
  };

  useEffect(() => {
    fetchStationsFromApi().catch((error) => {
      console.warn(error);
    });

    try {
      const sub = API.graphql<GraphQLSubscription<OnCreateStationSubscription>>(
        {
          ...graphqlOperation(onCreateStation),
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        }
      ).subscribe({
        next: ({ provider, value }) => {
          fetchStationsFromApi().catch((error) => {
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

  const deleteStationById = async (id: string) => {
    try {
      await API.graphql({
        query: deleteStation,
        variables: { input: { id } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      // re-fetch nets
      await fetchStationsFromApi();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container direction="column" spacing={2}>
      {stations.map((station) => (
        <Grid item key={station.id}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "start",
                gap: 2,
              }}
            >
              <StationPreview station={station} />
              <IconButton
                onClick={() => {
                  deleteStationById(station.id).catch((error) => {
                    console.error(error);
                  });
                }}
              >
                <Delete />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
