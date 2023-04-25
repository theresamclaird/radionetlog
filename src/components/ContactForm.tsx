import React from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import {
  Box,
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
import { createContact } from "../graphql/mutations";
import { type CreateContactInput } from "../API";

export interface Props {
  roundId: string | null;
}

export default function ContactForm({ roundId }: Props) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setFocus,
  } = useForm<CreateContactInput>({
    defaultValues: {
      roundId: roundId === null ? "" : roundId,
      callSign: "",
      name: "",
      location: "",
      attributes: [],
      reportCompleted: false,
    },
  });

  const onSubmit: SubmitHandler<CreateContactInput> = async (data) => {
    if (roundId === null) {
      return;
    }

    try {
      const createContactInput: CreateContactInput = {
        roundId,
        callSign: data.callSign,
        name: data.name,
        location: data.location,
        attributes: data.attributes,
        reportCompleted: data.reportCompleted,
      };

      await API.graphql({
        query: createContact,
        variables: { input: createContactInput },
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

  const disableForm = roundId === null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {/* callSign */}
        <TextField
          disabled={disableForm}
          variant="outlined"
          fullWidth
          id="callSign"
          label="Call Sign"
          type="text"
          error={errors.callSign != null}
          helperText={errors.callSign != null ? errors.callSign.message : null}
          {...register("callSign", {
            required: {
              value: true,
              message: "Required Field",
            },
          })}
          sx={{ flex: 1, minWidth: 100 }}
        />

        {/* name */}
        <TextField
          disabled={disableForm}
          variant="outlined"
          fullWidth
          id="name"
          label="Name"
          type="text"
          error={errors.name != null}
          helperText={errors.name != null ? errors.name.message : null}
          {...register("name")}
          sx={{ flex: 2, minWidth: 200 }}
        />

        {/* location */}
        <TextField
          disabled={disableForm}
          variant="outlined"
          fullWidth
          id="location"
          label="Location"
          type="text"
          error={errors.location != null}
          helperText={errors.location != null ? errors.location.message : null}
          {...register("location")}
          sx={{ flex: 2, minWidth: 200 }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* attributes */}
          <Controller
            name="attributes"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value } }) => {
              return (
                <ToggleButtonGroup
                  disabled={disableForm}
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
          <IconButton disabled={disableForm} type="submit">
            <AddBox />
          </IconButton>
        </Box>
      </Box>
    </form>
  );
}
