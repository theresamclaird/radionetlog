import React, { type ReactElement, useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API } from "aws-amplify";
import NetPreview from "../components/NetPreview";
import { type Net, type ListNetsQuery } from "../API";

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
                inAndOut
                mobile
                internet
                recheck
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

export default function Home(): ReactElement {
  const [nets, setNets] = useState<Net[]>([]);

  useEffect(() => {
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

    fetchNetsFromApi().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: 32 }}>
      <Grid container direction="column">
        {nets.map((net) => (
          <Grid item key={net.id}>
            <NetPreview net={net} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
