import React, { type ReactElement, useState } from "react";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Language from "@mui/icons-material/Language";
import Delete from "@mui/icons-material/Delete";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import PublishedWithChanges from "@mui/icons-material/PublishedWithChanges";
import { type Contact, type CreateContactInput } from "../../API";
import { deleteContact } from "../../graphql/mutations";

interface Props {
  contact: Contact;
}

export default function ContactReplay({ contact }: Props): ReactElement {
  const [expand, setExpand] = useState(false);
  const {
    control,
    register,
    formState: { errors },
  } = useForm<CreateContactInput>({
    defaultValues: contact === null ? { callSign: "", type: "qso" } : contact,
  });

  const d = new Date(contact.createdAt);
  const locale = navigator?.languages[0];
  const contactTime = d.toLocaleString(locale !== null ? locale : "en-US", {
    hour12: false,
    dateStyle: "short",
    timeStyle: "short",
  });

  const deleteContactById = async (id: string) => {
    try {
      await API.graphql({
        query: deleteContact,
        variables: { input: { id } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Grid item container direction="row" spacing={1} alignItems="start">
      <Grid item xs={1} md={0.6} sx={{ textAlign: "left" }}>
        <IconButton
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Grid>

      <Grid item container direction="column" spacing={1} xs={10} md={10.8}>
        <Grid
          item
          container
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={3} md={2}>
            <Typography>{contactTime}</Typography>
          </Grid>

          <Grid item xs={3} md={2}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              id="callSign"
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

          <Grid item xs={6} md={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              id="name"
              type="text"
              error={errors.name != null}
              helperText={errors.name != null ? errors.name.message : null}
              {...register("name")}
            />
          </Grid>

          <Grid item xs={6} md={2.5}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              id="qth"
              type="text"
              error={errors.qth != null}
              helperText={errors.qth != null ? errors.qth.message : null}
              {...register("qth")}
            />
          </Grid>

          <Grid item xs={6} md={2.5}>
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
        </Grid>

        {expand && (
          <Grid item container direction="row" spacing={1} xs={12}>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                multiline
                variant="outlined"
                label="Comments"
                id="comments"
                type="text"
                {...register("comments")}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Report (Sent)"
                id="reportSent"
                type="text"
                {...register("reportSent")}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Report (Received)"
                id="reportReceived"
                type="text"
                {...register("reportReceived")}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Station Power"
                id="stationPower"
                type="text"
                {...register("stationPower")}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Grid Square"
                id="gridSquare"
                type="text"
                {...register("gridSquare")}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={<Checkbox size="small" {...register("qslSent")} />}
                label="QSL Sent"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={<Checkbox size="small" {...register("qslReceived")} />}
                label="QSL Received"
              />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Repeater"
                id="repeater"
                type="text"
                {...register("repeater")}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Frequency"
                id="frequency"
                type="text"
                {...register("frequency")}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Mode"
                id="mode"
                type="text"
                {...register("mode")}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                label="Power"
                id="power"
                type="text"
                {...register("power")}
              />
            </Grid>
          </Grid>
        )}
      </Grid>

      <Grid item xs={1} md={0.6} sx={{ textAlign: "right" }}>
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
    </Grid>
  );
}

/*

  completedAt: String
  roundId: ID

  frequency: String
  repeater: String
  mode: String
  power: String

  */
