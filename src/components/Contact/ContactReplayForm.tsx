import React, { type ReactElement } from "react";
import { useForm, Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Language from "@mui/icons-material/Language";
import { type UpdateContactInput, type Contact } from "../../API";

interface Props {
  contact: Contact;
}

export default function ContactReplayForm({
  contact: { createdAt, callSign, name, qth, attributes },
}: Props): ReactElement {
  const { control, register } = useForm<UpdateContactInput>();
  const d = new Date(createdAt);
  const locale = navigator?.languages[0];
  const contactTime = d.toLocaleString(locale !== null ? locale : "en-US", {
    hour12: false,
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <form>
      <Grid container direction="column" spacing={1}>
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
              label="Call Sign"
              type="text"
              value={callSign}
              {...register("callSign")}
            />
          </Grid>

          <Grid item xs={6} md={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Name"
              type="text"
              value={name}
              {...register("name")}
            />
          </Grid>

          <Grid item xs={6} md={2.5}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="QTH"
              type="text"
              value={qth}
              {...register("qth")}
            />
          </Grid>

          <Grid item xs={6} md={2.5} sx={{ textAlign: "right" }}>
            <Controller
              name="attributes"
              control={control}
              defaultValue={attributes}
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
                  </ToggleButtonGroup>
                );
              }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="row" spacing={1} xs={12}>
          <Grid item xs={12}>
            <TextField
              size="small"
              fullWidth
              multiline
              rows={2}
              variant="outlined"
              label="Comments"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Report (Sent)"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Report (Received)"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Repeater"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Frequency"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Power"
              type="text"
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
