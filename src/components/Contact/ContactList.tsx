import React, { type ReactElement, useState, useEffect } from "react";
import { GRAPHQL_AUTH_MODE, type GraphQLSubscription } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Delete from "@mui/icons-material/Delete";
import {
  type OnCreateContactSubscription,
  type Contact,
  type ContactsByDateQuery,
} from "../../API";
import { contactsByDate } from "../../graphql/queries";
import { onCreateContact } from "../../graphql/subscriptions";
import { deleteContact } from "../../graphql/mutations";
import ContactReplay from "./ContactReplay";

export default function ContactList(): ReactElement {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContactFromApi = async (): Promise<Contact[]> => {
    try {
      const response = (await API.graphql({
        query: contactsByDate,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        variables: { type: "qso", sortDirection: "DESC" },
      })) as {
        data: ContactsByDateQuery;
        errors: any[];
      };

      if (response?.errors?.length > 0) {
        response.errors.forEach((error) => {
          console.warn(error);
        });
        return [];
      }

      const fetchedContacts = response?.data?.contactsByDate
        ?.items as Contact[];
      setContacts(fetchedContacts);
      return fetchedContacts;
    } catch (error) {
      console.warn(error);
    }

    return [];
  };

  useEffect(() => {
    fetchContactFromApi().catch((error) => {
      console.warn(error);
    });

    try {
      const sub = API.graphql<GraphQLSubscription<OnCreateContactSubscription>>(
        {
          ...graphqlOperation(onCreateContact),
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        }
      ).subscribe({
        next: () => {
          fetchContactFromApi().catch((error) => {
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
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const deleteContactById = async (id: string) => {
    try {
      await API.graphql({
        query: deleteContact,
        variables: { input: { id } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      await fetchContactFromApi();
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      sx={{ borderBottom: "solid 1px #ccc", justifyContent: "center" }}
    >
      {contacts.map((contact) => (
        <Grid
          item
          key={contact.id}
          sx={{
            borderTop: "solid 1px #ccc",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ContactReplay contact={contact} />
          <IconButton
            onClick={() => {
              deleteContactById(contact.id).catch((error) => {
                console.warn(error);
              });
            }}
          >
            <Delete />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
}
