/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Contact } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ContactUpdateForm(props) {
  const {
    id: idProp,
    contact: contactModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    type: "",
    frequency: "",
    repeater: "",
    allStar: "",
    echoLink: "",
    mode: "",
    power: "",
    createdAt: "",
    completedAt: "",
    callSign: "",
    name: "",
    qth: "",
    attributes: [],
    reportSent: "",
    reportReceived: "",
    qslSent: false,
    qslReceived: false,
    comments: "",
    owner: "",
  };
  const [type, setType] = React.useState(initialValues.type);
  const [frequency, setFrequency] = React.useState(initialValues.frequency);
  const [repeater, setRepeater] = React.useState(initialValues.repeater);
  const [allStar, setAllStar] = React.useState(initialValues.allStar);
  const [echoLink, setEchoLink] = React.useState(initialValues.echoLink);
  const [mode, setMode] = React.useState(initialValues.mode);
  const [power, setPower] = React.useState(initialValues.power);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [completedAt, setCompletedAt] = React.useState(
    initialValues.completedAt
  );
  const [callSign, setCallSign] = React.useState(initialValues.callSign);
  const [name, setName] = React.useState(initialValues.name);
  const [qth, setQth] = React.useState(initialValues.qth);
  const [attributes, setAttributes] = React.useState(initialValues.attributes);
  const [reportSent, setReportSent] = React.useState(initialValues.reportSent);
  const [reportReceived, setReportReceived] = React.useState(
    initialValues.reportReceived
  );
  const [qslSent, setQslSent] = React.useState(initialValues.qslSent);
  const [qslReceived, setQslReceived] = React.useState(
    initialValues.qslReceived
  );
  const [comments, setComments] = React.useState(initialValues.comments);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactRecord
      ? { ...initialValues, ...contactRecord }
      : initialValues;
    setType(cleanValues.type);
    setFrequency(cleanValues.frequency);
    setRepeater(cleanValues.repeater);
    setAllStar(cleanValues.allStar);
    setEchoLink(cleanValues.echoLink);
    setMode(cleanValues.mode);
    setPower(cleanValues.power);
    setCreatedAt(cleanValues.createdAt);
    setCompletedAt(cleanValues.completedAt);
    setCallSign(cleanValues.callSign);
    setName(cleanValues.name);
    setQth(cleanValues.qth);
    setAttributes(cleanValues.attributes ?? []);
    setCurrentAttributesValue("");
    setReportSent(cleanValues.reportSent);
    setReportReceived(cleanValues.reportReceived);
    setQslSent(cleanValues.qslSent);
    setQslReceived(cleanValues.qslReceived);
    setComments(cleanValues.comments);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [contactRecord, setContactRecord] = React.useState(contactModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Contact, idProp)
        : contactModelProp;
      setContactRecord(record);
    };
    queryData();
  }, [idProp, contactModelProp]);
  React.useEffect(resetStateValues, [contactRecord]);
  const [currentAttributesValue, setCurrentAttributesValue] =
    React.useState("");
  const attributesRef = React.createRef();
  const validations = {
    type: [{ type: "Required" }],
    frequency: [],
    repeater: [],
    allStar: [],
    echoLink: [],
    mode: [],
    power: [],
    createdAt: [{ type: "Required" }],
    completedAt: [],
    callSign: [{ type: "Required" }],
    name: [],
    qth: [],
    attributes: [],
    reportSent: [],
    reportReceived: [],
    qslSent: [],
    qslReceived: [],
    comments: [],
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
          type,
          frequency,
          repeater,
          allStar,
          echoLink,
          mode,
          power,
          createdAt,
          completedAt,
          callSign,
          name,
          qth,
          attributes,
          reportSent,
          reportReceived,
          qslSent,
          qslReceived,
          comments,
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
            Contact.copyOf(contactRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ContactUpdateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type: value,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
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
              type,
              frequency: value,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
        label="Repeater"
        isRequired={false}
        isReadOnly={false}
        value={repeater}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater: value,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
        label="All star"
        isRequired={false}
        isReadOnly={false}
        value={allStar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar: value,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
        label="Echo link"
        isRequired={false}
        isReadOnly={false}
        value={echoLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink: value,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
        label="Mode"
        isRequired={false}
        isReadOnly={false}
        value={mode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode: value,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power: value,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt: value,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
        isRequired={false}
        isReadOnly={false}
        value={completedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt: value,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
        label="Call sign"
        isRequired={true}
        isReadOnly={false}
        value={callSign}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign: value,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name: value,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Qth"
        isRequired={false}
        isReadOnly={false}
        value={qth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth: value,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.qth ?? value;
          }
          if (errors.qth?.hasError) {
            runValidationTasks("qth", value);
          }
          setQth(value);
        }}
        onBlur={() => runValidationTasks("qth", qth)}
        errorMessage={errors.qth?.errorMessage}
        hasError={errors.qth?.hasError}
        {...getOverrideProps(overrides, "qth")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes: values,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            values = result?.attributes ?? values;
          }
          setAttributes(values);
          setCurrentAttributesValue("");
        }}
        currentFieldValue={currentAttributesValue}
        label={"Attributes"}
        items={attributes}
        hasError={errors?.attributes?.hasError}
        errorMessage={errors?.attributes?.errorMessage}
        setFieldValue={setCurrentAttributesValue}
        inputFieldRef={attributesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Attributes"
          isRequired={false}
          isReadOnly={false}
          value={currentAttributesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.attributes?.hasError) {
              runValidationTasks("attributes", value);
            }
            setCurrentAttributesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("attributes", currentAttributesValue)
          }
          errorMessage={errors.attributes?.errorMessage}
          hasError={errors.attributes?.hasError}
          ref={attributesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "attributes")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Report sent"
        isRequired={false}
        isReadOnly={false}
        value={reportSent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent: value,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.reportSent ?? value;
          }
          if (errors.reportSent?.hasError) {
            runValidationTasks("reportSent", value);
          }
          setReportSent(value);
        }}
        onBlur={() => runValidationTasks("reportSent", reportSent)}
        errorMessage={errors.reportSent?.errorMessage}
        hasError={errors.reportSent?.hasError}
        {...getOverrideProps(overrides, "reportSent")}
      ></TextField>
      <TextField
        label="Report received"
        isRequired={false}
        isReadOnly={false}
        value={reportReceived}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived: value,
              qslSent,
              qslReceived,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.reportReceived ?? value;
          }
          if (errors.reportReceived?.hasError) {
            runValidationTasks("reportReceived", value);
          }
          setReportReceived(value);
        }}
        onBlur={() => runValidationTasks("reportReceived", reportReceived)}
        errorMessage={errors.reportReceived?.errorMessage}
        hasError={errors.reportReceived?.hasError}
        {...getOverrideProps(overrides, "reportReceived")}
      ></TextField>
      <SwitchField
        label="Qsl sent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={qslSent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent: value,
              qslReceived,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.qslSent ?? value;
          }
          if (errors.qslSent?.hasError) {
            runValidationTasks("qslSent", value);
          }
          setQslSent(value);
        }}
        onBlur={() => runValidationTasks("qslSent", qslSent)}
        errorMessage={errors.qslSent?.errorMessage}
        hasError={errors.qslSent?.hasError}
        {...getOverrideProps(overrides, "qslSent")}
      ></SwitchField>
      <SwitchField
        label="Qsl received"
        defaultChecked={false}
        isDisabled={false}
        isChecked={qslReceived}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived: value,
              comments,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.qslReceived ?? value;
          }
          if (errors.qslReceived?.hasError) {
            runValidationTasks("qslReceived", value);
          }
          setQslReceived(value);
        }}
        onBlur={() => runValidationTasks("qslReceived", qslReceived)}
        errorMessage={errors.qslReceived?.errorMessage}
        hasError={errors.qslReceived?.hasError}
        {...getOverrideProps(overrides, "qslReceived")}
      ></SwitchField>
      <TextField
        label="Comments"
        isRequired={false}
        isReadOnly={false}
        value={comments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.comments ?? value;
          }
          if (errors.comments?.hasError) {
            runValidationTasks("comments", value);
          }
          setComments(value);
        }}
        onBlur={() => runValidationTasks("comments", comments)}
        errorMessage={errors.comments?.errorMessage}
        hasError={errors.comments?.hasError}
        {...getOverrideProps(overrides, "comments")}
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
              type,
              frequency,
              repeater,
              allStar,
              echoLink,
              mode,
              power,
              createdAt,
              completedAt,
              callSign,
              name,
              qth,
              attributes,
              reportSent,
              reportReceived,
              qslSent,
              qslReceived,
              comments,
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
          isDisabled={!(idProp || contactModelProp)}
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
              !(idProp || contactModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
