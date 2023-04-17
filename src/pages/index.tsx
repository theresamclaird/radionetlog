import React, { type ReactElement, Fragment, useState, useEffect } from "react";
import { Container } from "@mui/material";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API } from "aws-amplify";
import NetPreview from "../components/NetPreview";
import { useUser } from "../context/AuthContext";
import { type Net, type ListNetsQuery } from "../API";
import { listNets } from "../graphql/queries";

export default function Home(): ReactElement {
  const { user } = useUser();
  const [nets, setNets] = useState<Net[]>([]);

  useEffect(() => {
    const fetchNetsFromApi = async (): Promise<Net[]> => {
      try {
        const allNets = (await API.graphql({
          query: listNets,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as {
          data: ListNetsQuery;
          errors: any[];
        };

        if (allNets.data?.listNets?.items != null) {
          setNets(allNets.data.listNets.items as Net[]);
          return allNets.data.listNets.items as Net[];
        }
      } catch (error) {
        console.error(error);
      }

      return [];
    };

    fetchNetsFromApi().catch((error) => {
      console.error(error);
    });
  }, []);

  console.log("user", user);
  console.log("nets", nets);

  return (
    <Container maxWidth="md">
      {nets.map((net) => (
        <Fragment key={net.id}>
          <NetPreview net={net} />
        </Fragment>
      ))}
    </Container>
  );
}
