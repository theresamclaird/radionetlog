import React, { useEffect, useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  DirectionsCar,
  Language,
} from "@mui/icons-material";

import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { createStation } from "../../graphql/mutations";
import { type Station, type CreateStationInput } from "../../API";

export interface StationFormProps {
  station: Station | CreateStationInput;
}

export default function StationForm({ station }: StationFormProps) {
  const [showNotes, setShowNotes] = useState(false);
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm<CreateStationInput>({
    defaultValues: station,
  });

  const onSubmit: SubmitHandler<CreateStationInput> = async (data) => {
    try {
      const createStationInput: CreateStationInput = {
        callSign: data.callSign,
        name: data.name,
        location: data.location,
        notes: data.notes,
        attributes: data.attributes,
      };

      await API.graphql({
        query: createStation,
        variables: { input: createStationInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      setFocus("callSign");
      reset();
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    setFocus("callSign");
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2,
              }}
            >
              <IconButton
                onClick={() => {
                  setShowNotes(!showNotes);
                }}
              >
                {showNotes ? <ExpandLess /> : <ExpandMore />}
              </IconButton>

              <TextField
                sx={{ flex: 1 }}
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

              <TextField
                sx={{ flex: 2 }}
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                type="text"
                error={errors.name != null}
                helperText={errors.name != null ? errors.name.message : null}
                {...register("name")}
              />

              <TextField
                sx={{ flex: 2 }}
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

              <Controller
                name="attributes"
                control={control}
                defaultValue={station.attributes}
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
            </Box>

            {/* notes */}
            {showNotes && (
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
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
