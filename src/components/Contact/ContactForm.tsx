import React from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {
  Grid,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import {
  DirectionsCar,
  Language,
  PublishedWithChanges,
  AddBox,
} from "@mui/icons-material";
import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { createContact } from "../../graphql/mutations";
import { type CreateContactInput } from "../../API";

export interface Props {
  contact: CreateContactInput | null;
}

export default function ContactForm({ contact }: Props) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm<CreateContactInput>({
    defaultValues:
      contact === null
        ? {
            roundId: null,
            callSign: "",
            name: "",
            location: "",
            attributes: [],
          }
        : contact,
  });

  const onSubmit: SubmitHandler<CreateContactInput> = async (data) => {
    if (contact?.roundId === null) {
      return;
    }

    try {
      const createContactInput: CreateContactInput = data;

      await API.graphql({
        query: createContact,
        variables: { input: createContactInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      setFocus("callSign");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    setFocus("callSign");
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Grid
        container
        direction="row"
        spacing={0}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={8}
          direction="row"
          spacing={1}
          alignItems="center"
        >
          {/* callSign */}
          <Grid item xs={2}>
            <TextField
              variant="outlined"
              fullWidth
              id="callSign"
              label="Call Sign"
              type="text"
              error={errors.callSign != null}
              helperText={
                errors.callSign != null ? errors.callSign.message : null
              }
              {...register("callSign", {
                required: {
                  value: true,
                  message: "Required Field",
                },
              })}
            />
          </Grid>

          {/* name */}
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              type="text"
              error={errors.name != null}
              helperText={errors.name != null ? errors.name.message : null}
              {...register("name")}
            />
          </Grid>
          {/* location */}
          <Grid item xs={5}>
            <TextField
              variant="outlined"
              fullWidth
              id="location"
              label="Location"
              type="text"
              error={errors.location != null}
              helperText={
                errors.location != null ? errors.location.message : null
              }
              {...register("location")}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          container
          spacing={1}
          direction="row"
          justifySelf="end"
          justifyContent="end"
          alignItems="center"
        >
          <Grid item xs>
            {/* signal report */}
            <TextField
              variant="outlined"
              fullWidth
              id="signalReport"
              label="Signal Report"
              type="text"
              error={errors.signalReport != null}
              helperText={
                errors.signalReport != null ? errors.signalReport.message : null
              }
              {...register("signalReport")}
            />
          </Grid>
          <Grid item>
            {/* attributes */}
            <Controller
              name="attributes"
              control={control}
              defaultValue={[]}
              render={({ field: { onChange, value } }) => {
                return (
                  <ToggleButtonGroup
                    color="primary"
                    size="small"
                    aria-label="contact attributes"
                    onChange={(e, value) => {
                      onChange(value);
                    }}
                    value={value}
                  >
                    <ToggleButton value="inAndOut" aria-label="in-and-out">
                      I/O
                    </ToggleButton>
                    <ToggleButton value="mobile" aria-label="mobile">
                      <DirectionsCar />
                    </ToggleButton>
                    <ToggleButton value="internet" aria-label="internet">
                      <Language />
                    </ToggleButton>
                    <ToggleButton value="recheck" aria-label="recheck">
                      <PublishedWithChanges />
                    </ToggleButton>
                  </ToggleButtonGroup>
                );
              }}
            />
          </Grid>
          <Grid item>
            <IconButton type="submit">
              <AddBox />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
