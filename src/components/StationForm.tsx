import React from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {
  Button,
  Grid,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Paper,
} from "@mui/material";
import { DirectionsCar, Language } from "@mui/icons-material";
import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { createStation } from "../graphql/mutations";
import { type CreateStationInput, type Station } from "../API";

interface IFormInput {
  callSign: string;
  name: string;
  location: string;
  notes: string;
  attributes: string[];
}

export interface StationFormProps {
  station: Station;
}

export default function StationForm({ station }: StationFormProps) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm<IFormInput>({
    defaultValues: station,
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const createStationInput: CreateStationInput = {
        callSign: data.callSign,
        name: data.name,
        location: data.location,
        notes: data.notes,
        attributes: data.attributes,
      };
      console.log(createStationInput);

      await API.graphql({
        query: createStation,
        variables: { input: createStationInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      reset();
      setFocus("callSign");
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    setFocus("callSign");
  }, [setFocus]);

  return (
    <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Grid container spacing={2} alignItems="center">
          {/* callSign */}
          <Grid item xs={12} sm={4} md={2}>
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
          <Grid item xs={12} sm={4} md={4}>
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
          <Grid item xs={12} sm={4} md={4}>
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

          {/* attributes */}
          <Grid item xs={12} sm={12} md={2}>
            <Controller
              name="attributes"
              control={control}
              defaultValue={station.attributes || []}
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

          {/* notes */}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              id="notes"
              label="Notes"
              type="text"
              error={errors.notes != null}
              helperText={errors.notes != null ? errors.notes.message : null}
              {...register("notes")}
            />
          </Grid>

          <Grid item>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
