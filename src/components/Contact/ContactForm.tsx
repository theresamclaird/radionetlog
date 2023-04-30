import React, { useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {
  Grid,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  DirectionsCar,
  Language,
  PublishedWithChanges,
} from "@mui/icons-material";
import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { createContact } from "../../graphql/mutations";
import { type CreateContactInput } from "../../API";

export interface Props {
  contact: CreateContactInput | null;
}

export default function ContactForm({ contact }: Props) {
  const [method, setMethod] = useState("rf");
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
      <Grid container direction="column" spacing={4}>
        <Grid item container direction="row" spacing={1} alignItems="center">
          <Grid item xs={12}>
            <RadioGroup
              name="contactMethod"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 3,
              }}
            >
              <FormControlLabel
                value="rf"
                checked={method === "rf"}
                onClick={() => {
                  setMethod("rf");
                }}
                control={<Radio />}
                label="RF"
              />
              <FormControlLabel
                value="allStar"
                checked={method === "allStar"}
                onClick={() => {
                  setMethod("allStar");
                }}
                control={<Radio />}
                label="AllStar"
              />
              <FormControlLabel
                value="echoLink"
                checked={method === "echoLink"}
                onClick={() => {
                  setMethod("echoLink");
                }}
                control={<Radio />}
                label="EchoLink"
              />
            </RadioGroup>
          </Grid>
          {method === "allStar" && (
            <Grid item>
              <TextField
                variant="outlined"
                id="allStar"
                label="Node"
                type="text"
                error={errors.allStar != null}
                helperText={
                  errors.allStar != null ? errors.allStar.message : null
                }
                {...register("allStar")}
              />
            </Grid>
          )}

          {method === "echoLink" && (
            <Grid item>
              <TextField
                variant="outlined"
                id="echoLink"
                label="Node"
                type="text"
                error={errors.echoLink != null}
                helperText={
                  errors.echoLink != null ? errors.echoLink.message : null
                }
                {...register("echoLink")}
              />
            </Grid>
          )}

          <Grid item>
            <TextField
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

          {method === "rf" && (
            <Grid item>
              <TextField
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
          )}

          {method === "rf" && (
            <Grid item>
              <TextField
                variant="outlined"
                id="mode"
                label="Mode"
                type="text"
                error={errors.mode != null}
                helperText={errors.mode != null ? errors.mode.message : null}
                {...register("mode")}
              />
            </Grid>
          )}

          {method === "rf" && (
            <Grid item>
              <TextField
                variant="outlined"
                id="power"
                label="Power"
                type="text"
                error={errors.power != null}
                helperText={errors.power != null ? errors.power.message : null}
                {...register("power")}
              />
            </Grid>
          )}
        </Grid>
        <Grid item container spacing={1} alignItems="center">
          <Grid item xs={2}>
            <TextField
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

          <Grid item xs={4}>
            <TextField
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

          <Grid item xs={4}>
            <TextField
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

          <Grid item xs>
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

          <Grid item xs={1.5}>
            <TextField
              variant="outlined"
              fullWidth
              id="reportSent"
              label="Report (Sent)"
              type="text"
              error={errors.reportSent != null}
              helperText={
                errors.reportSent != null ? errors.reportSent.message : null
              }
              {...register("reportSent")}
            />
          </Grid>

          <Grid item xs={1.5}>
            <TextField
              variant="outlined"
              fullWidth
              id="reportReceived"
              label="Report (Received)"
              type="text"
              error={errors.reportReceived != null}
              helperText={
                errors.reportReceived != null
                  ? errors.reportReceived.message
                  : null
              }
              {...register("reportReceived")}
            />
          </Grid>

          <Grid item xs={1.5}>
            <FormControlLabel
              control={<Checkbox id="qslSent" {...register("qslSent")} />}
              label="QSL Sent"
            />
          </Grid>

          <Grid item xs={1.5}>
            <FormControlLabel
              control={
                <Checkbox id="qslReceived" {...register("qslReceived")} />
              }
              label="QSL Received"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              variant="outlined"
              fullWidth
              id="comments"
              label="Comments"
              type="text"
              error={errors.comments != null}
              helperText={
                errors.comments != null ? errors.comments.message : null
              }
              {...register("comments")}
            />
          </Grid>

          <Grid item>
            <Button type="submit">Log Contact</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
