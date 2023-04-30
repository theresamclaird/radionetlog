/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Repeater } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RepeaterUpdateForm(props) {
  const {
    id: idProp,
    repeater: repeaterModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    callSign: "",
    inputFrequency: "",
    inputTone: "",
    outputFrequency: "",
    outputTone: "",
    offset: "",
    grid: "",
    notes: "",
    sponsor: "",
    echoLink: "",
    allStar: "",
    url: "",
    owner: "",
  };
  const [callSign, setCallSign] = React.useState(initialValues.callSign);
  const [inputFrequency, setInputFrequency] = React.useState(
    initialValues.inputFrequency
  );
  const [inputTone, setInputTone] = React.useState(initialValues.inputTone);
  const [outputFrequency, setOutputFrequency] = React.useState(
    initialValues.outputFrequency
  );
  const [outputTone, setOutputTone] = React.useState(initialValues.outputTone);
  const [offset, setOffset] = React.useState(initialValues.offset);
  const [grid, setGrid] = React.useState(initialValues.grid);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [sponsor, setSponsor] = React.useState(initialValues.sponsor);
  const [echoLink, setEchoLink] = React.useState(initialValues.echoLink);
  const [allStar, setAllStar] = React.useState(initialValues.allStar);
  const [url, setUrl] = React.useState(initialValues.url);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = repeaterRecord
      ? { ...initialValues, ...repeaterRecord }
      : initialValues;
    setCallSign(cleanValues.callSign);
    setInputFrequency(cleanValues.inputFrequency);
    setInputTone(cleanValues.inputTone);
    setOutputFrequency(cleanValues.outputFrequency);
    setOutputTone(cleanValues.outputTone);
    setOffset(cleanValues.offset);
    setGrid(cleanValues.grid);
    setNotes(cleanValues.notes);
    setSponsor(cleanValues.sponsor);
    setEchoLink(cleanValues.echoLink);
    setAllStar(cleanValues.allStar);
    setUrl(cleanValues.url);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [repeaterRecord, setRepeaterRecord] = React.useState(repeaterModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Repeater, idProp)
        : repeaterModelProp;
      setRepeaterRecord(record);
    };
    queryData();
  }, [idProp, repeaterModelProp]);
  React.useEffect(resetStateValues, [repeaterRecord]);
  const validations = {
    callSign: [{ type: "Required" }],
    inputFrequency: [],
    inputTone: [],
    outputFrequency: [],
    outputTone: [],
    offset: [],
    grid: [],
    notes: [],
    sponsor: [],
    echoLink: [],
    allStar: [],
    url: [],
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
          callSign,
          inputFrequency,
          inputTone,
          outputFrequency,
          outputTone,
          offset,
          grid,
          notes,
          sponsor,
          echoLink,
          allStar,
          url,
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
          await DataStore.save(
            Repeater.copyOf(repeaterRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RepeaterUpdateForm")}
      {...rest}
    >
      <TextField
        label="Call sign"
        isRequired={true}
        isReadOnly={false}
        value={callSign}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign: value,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.callSign ?? value;
          }
          if (errors.callSign?.hasError) {
            runValidationTasks("callSign", value);
          }
          setCallSign(value);
        }}
        onBlur={() => runValidationTasks("callSign", callSign)}
        errorMessage={errors.callSign?.errorMessage}
        hasError={errors.callSign?.hasError}
        {...getOverrideProps(overrides, "callSign")}
      ></TextField>
      <TextField
        label="Input frequency"
        isRequired={false}
        isReadOnly={false}
        value={inputFrequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency: value,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.inputFrequency ?? value;
          }
          if (errors.inputFrequency?.hasError) {
            runValidationTasks("inputFrequency", value);
          }
          setInputFrequency(value);
        }}
        onBlur={() => runValidationTasks("inputFrequency", inputFrequency)}
        errorMessage={errors.inputFrequency?.errorMessage}
        hasError={errors.inputFrequency?.hasError}
        {...getOverrideProps(overrides, "inputFrequency")}
      ></TextField>
      <TextField
        label="Input tone"
        isRequired={false}
        isReadOnly={false}
        value={inputTone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone: value,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.inputTone ?? value;
          }
          if (errors.inputTone?.hasError) {
            runValidationTasks("inputTone", value);
          }
          setInputTone(value);
        }}
        onBlur={() => runValidationTasks("inputTone", inputTone)}
        errorMessage={errors.inputTone?.errorMessage}
        hasError={errors.inputTone?.hasError}
        {...getOverrideProps(overrides, "inputTone")}
      ></TextField>
      <TextField
        label="Output frequency"
        isRequired={false}
        isReadOnly={false}
        value={outputFrequency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency: value,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.outputFrequency ?? value;
          }
          if (errors.outputFrequency?.hasError) {
            runValidationTasks("outputFrequency", value);
          }
          setOutputFrequency(value);
        }}
        onBlur={() => runValidationTasks("outputFrequency", outputFrequency)}
        errorMessage={errors.outputFrequency?.errorMessage}
        hasError={errors.outputFrequency?.hasError}
        {...getOverrideProps(overrides, "outputFrequency")}
      ></TextField>
      <TextField
        label="Output tone"
        isRequired={false}
        isReadOnly={false}
        value={outputTone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone: value,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.outputTone ?? value;
          }
          if (errors.outputTone?.hasError) {
            runValidationTasks("outputTone", value);
          }
          setOutputTone(value);
        }}
        onBlur={() => runValidationTasks("outputTone", outputTone)}
        errorMessage={errors.outputTone?.errorMessage}
        hasError={errors.outputTone?.hasError}
        {...getOverrideProps(overrides, "outputTone")}
      ></TextField>
      <TextField
        label="Offset"
        isRequired={false}
        isReadOnly={false}
        value={offset}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset: value,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.offset ?? value;
          }
          if (errors.offset?.hasError) {
            runValidationTasks("offset", value);
          }
          setOffset(value);
        }}
        onBlur={() => runValidationTasks("offset", offset)}
        errorMessage={errors.offset?.errorMessage}
        hasError={errors.offset?.hasError}
        {...getOverrideProps(overrides, "offset")}
      ></TextField>
      <TextField
        label="Grid"
        isRequired={false}
        isReadOnly={false}
        value={grid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid: value,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.grid ?? value;
          }
          if (errors.grid?.hasError) {
            runValidationTasks("grid", value);
          }
          setGrid(value);
        }}
        onBlur={() => runValidationTasks("grid", grid)}
        errorMessage={errors.grid?.errorMessage}
        hasError={errors.grid?.hasError}
        {...getOverrideProps(overrides, "grid")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes: value,
              sponsor,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="Sponsor"
        isRequired={false}
        isReadOnly={false}
        value={sponsor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor: value,
              echoLink,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.sponsor ?? value;
          }
          if (errors.sponsor?.hasError) {
            runValidationTasks("sponsor", value);
          }
          setSponsor(value);
        }}
        onBlur={() => runValidationTasks("sponsor", sponsor)}
        errorMessage={errors.sponsor?.errorMessage}
        hasError={errors.sponsor?.hasError}
        {...getOverrideProps(overrides, "sponsor")}
      ></TextField>
      <TextField
        label="Echo link"
        isRequired={false}
        isReadOnly={false}
        value={echoLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink: value,
              allStar,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.echoLink ?? value;
          }
          if (errors.echoLink?.hasError) {
            runValidationTasks("echoLink", value);
          }
          setEchoLink(value);
        }}
        onBlur={() => runValidationTasks("echoLink", echoLink)}
        errorMessage={errors.echoLink?.errorMessage}
        hasError={errors.echoLink?.hasError}
        {...getOverrideProps(overrides, "echoLink")}
      ></TextField>
      <TextField
        label="All star"
        isRequired={false}
        isReadOnly={false}
        value={allStar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar: value,
              url,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.allStar ?? value;
          }
          if (errors.allStar?.hasError) {
            runValidationTasks("allStar", value);
          }
          setAllStar(value);
        }}
        onBlur={() => runValidationTasks("allStar", allStar)}
        errorMessage={errors.allStar?.errorMessage}
        hasError={errors.allStar?.hasError}
        {...getOverrideProps(overrides, "allStar")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
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
              callSign,
              inputFrequency,
              inputTone,
              outputFrequency,
              outputTone,
              offset,
              grid,
              notes,
              sponsor,
              echoLink,
              allStar,
              url,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || repeaterModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || repeaterModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
