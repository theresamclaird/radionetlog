/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Net } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NetCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    repeater: "",
    frequency: "",
    mode: "",
    power: "",
    createdAt: "",
    completedAt: "",
    owner: "",
  };
  const [repeater, setRepeater] = React.useState(initialValues.repeater);
  const [frequency, setFrequency] = React.useState(initialValues.frequency);
  const [mode, setMode] = React.useState(initialValues.mode);
  const [power, setPower] = React.useState(initialValues.power);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [completedAt, setCompletedAt] = React.useState(
    initialValues.completedAt
  );
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRepeater(initialValues.repeater);
    setFrequency(initialValues.frequency);
    setMode(initialValues.mode);
    setPower(initialValues.power);
    setCreatedAt(initialValues.createdAt);
    setCompletedAt(initialValues.completedAt);
    setOwner(initialValues.owner);
    setErrors({});
  };
  const validations = {
    repeater: [],
    frequency: [],
    mode: [],
    power: [],
    createdAt: [{ type: "Required" }],
    completedAt: [{ type: "Required" }],
    owner: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          repeater,
          frequency,
          mode,
          power,
          createdAt,
          completedAt,
          owner,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Net(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NetCreateForm")}
      {...rest}
    >
      <TextField
        label="Repeater"
        isRequired={false}
        isReadOnly={false}
        value={repeater}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              repeater: value,
              frequency,
              mode,
              power,
              createdAt,
              completedAt,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.repeater ?? value;
          }
          if (errors.repeater?.hasError) {
            runValidationTasks("repeater", value);
          }
          setRepeater(value);
        }}
        onBlur={() => runValidationTasks("repeater", repeater)}
        errorMessage={errors.repeater?.errorMessage}
        hasError={errors.repeater?.hasError}
        {...getOverrideProps(overrides, "repeater")}
      ></TextField>
      <TextField
        label="Frequency"
        isRequired={false}
        isReadOnly={false}
        value={frequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              repeater,
              frequency: value,
              mode,
              power,
              createdAt,
              completedAt,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.frequency ?? value;
          }
          if (errors.frequency?.hasError) {
            runValidationTasks("frequency", value);
          }
          setFrequency(value);
        }}
        onBlur={() => runValidationTasks("frequency", frequency)}
        errorMessage={errors.frequency?.errorMessage}
        hasError={errors.frequency?.hasError}
        {...getOverrideProps(overrides, "frequency")}
      ></TextField>
      <TextField
        label="Mode"
        isRequired={false}
        isReadOnly={false}
        value={mode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              repeater,
              frequency,
              mode: value,
              power,
              createdAt,
              completedAt,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.mode ?? value;
          }
          if (errors.mode?.hasError) {
            runValidationTasks("mode", value);
          }
          setMode(value);
        }}
        onBlur={() => runValidationTasks("mode", mode)}
        errorMessage={errors.mode?.errorMessage}
        hasError={errors.mode?.hasError}
        {...getOverrideProps(overrides, "mode")}
      ></TextField>
      <TextField
        label="Power"
        isRequired={false}
        isReadOnly={false}
        value={power}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              repeater,
              frequency,
              mode,
              power: value,
              createdAt,
              completedAt,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.power ?? value;
          }
          if (errors.power?.hasError) {
            runValidationTasks("power", value);
          }
          setPower(value);
        }}
        onBlur={() => runValidationTasks("power", power)}
        errorMessage={errors.power?.errorMessage}
        hasError={errors.power?.hasError}
        {...getOverrideProps(overrides, "power")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              repeater,
              frequency,
              mode,
              power,
              createdAt: value,
              completedAt,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Completed at"
        isRequired={true}
        isReadOnly={false}
        value={completedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              repeater,
              frequency,
              mode,
              power,
              createdAt,
              completedAt: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.completedAt ?? value;
          }
          if (errors.completedAt?.hasError) {
            runValidationTasks("completedAt", value);
          }
          setCompletedAt(value);
        }}
        onBlur={() => runValidationTasks("completedAt", completedAt)}
        errorMessage={errors.completedAt?.errorMessage}
        hasError={errors.completedAt?.hasError}
        {...getOverrideProps(overrides, "completedAt")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              repeater,
              frequency,
              mode,
              power,
              createdAt,
              completedAt,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
