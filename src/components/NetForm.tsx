import React, { type ReactElement, useState } from "react";
import { Grid, Box } from "@mui/material";
// import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
// import { API } from "aws-amplify";
import ContactForm from "../components/ContactForm";
import NetPreview from "../components/NetPreview";
import Slat from "../components/Slat";
import { type Net } from "../API";

/*
actions:
  - Add Net
  - Add Round
  - Add Contact to Round
  - Close Net
*/

// const newNetQuery = `
// mutation CreateNetMutation {
//   createNet(input: {}) {
//     id
//     rounds
//     createdAt
//   }
// }
// `;

export default function Home(): ReactElement {
  const [net] = useState<Net | null>(null);

  // const createNet = () => {
  //   const AddNetFromApi = async (): Promise<Net | null> => {
  //     try {
  //       const newNet = (await API.graphql({
  //         query: newNetQuery,
  //         authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  //       })) as {
  //         data: Net;
  //         errors: any[];
  //       };

  //       console.log("newNet", newNet);

  //       setNet(newNet?.data);
  //       return newNet?.data;
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     return null;
  //   };

  //   AddNetFromApi().catch((error) => {
  //     console.error(error);
  //   });
  // };

  return (
    <Slat>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <ContactForm
            contact={{
              roundId: "",
              callSign: "",
              name: "",
              location: "",
              attributes: [],
              reportCompleted: false,
            }}
          />
          {net !== null && (
            <Box sx={{ borderTop: "solid 1px #ccc", my: 2 }}>
              <NetPreview net={net} />
            </Box>
          )}
        </Grid>
      </Grid>
    </Slat>
  );
}
