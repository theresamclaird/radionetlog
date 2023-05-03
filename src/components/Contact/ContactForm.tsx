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
  KeyboardReturn,
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
            callSign: "",
            type: "qso",
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
      <Grid container direction="column" spacing={2}>
        <Grid item container direction="row" spacing={1}>
          <Grid item xs={6} sm={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              id="repeater"
              label="Repeater"
              type="text"
              error={errors.repeater != null}
              helperText={
                errors.repeater != null ? errors.repeater.message : null
              }
              {...register("repeater")}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              id="frequency"
              label="Frequency"
              type="text"
              error={errors.frequency != null}
              helperText={
                errors.frequency != null ? errors.frequency.message : null
              }
              {...register("frequency")}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              id="mode"
              label="Mode"
              type="text"
              error={errors.mode != null}
              helperText={errors.mode != null ? errors.mode.message : null}
              {...register("mode")}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              id="power"
              label="Power"
              type="text"
              error={errors.power != null}
              helperText={errors.power != null ? errors.power.message : null}
              {...register("power")}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" spacing={1}>
          <Grid item container spacing={1} alignItems="center">
            <Grid item xs={6} sm={2}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
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

            <Grid item xs={6} sm={3} md={4}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                id="name"
                label="Name"
                type="text"
                error={errors.name != null}
                helperText={errors.name != null ? errors.name.message : null}
                {...register("name")}
              />
            </Grid>

            <Grid item xs={6} sm={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                id="qth"
                label="QTH"
                type="text"
                error={errors.qth != null}
                helperText={errors.qth != null ? errors.qth.message : null}
                {...register("qth")}
              />
            </Grid>

            <Grid
              item
              xs={6}
              sm={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
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
              <IconButton type="submit">
                <KeyboardReturn />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
