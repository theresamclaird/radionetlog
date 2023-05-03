/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Contact } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactUpdateFormInputValues = {
    type?: string;
    frequency?: string;
    repeater?: string;
    mode?: string;
    power?: string;
    createdAt?: string;
    completedAt?: string;
    callSign?: string;
    name?: string;
    qth?: string;
    gridSquare?: string;
    attributes?: string[];
    stationPower?: string;
    reportSent?: string;
    reportReceived?: string;
    qslSent?: boolean;
    qslReceived?: boolean;
    comments?: string;
    owner?: string;
};
export declare type ContactUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    frequency?: ValidationFunction<string>;
    repeater?: ValidationFunction<string>;
    mode?: ValidationFunction<string>;
    power?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    completedAt?: ValidationFunction<string>;
    callSign?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    qth?: ValidationFunction<string>;
    gridSquare?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    stationPower?: ValidationFunction<string>;
    reportSent?: ValidationFunction<string>;
    reportReceived?: ValidationFunction<string>;
    qslSent?: ValidationFunction<boolean>;
    qslReceived?: ValidationFunction<boolean>;
    comments?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUpdateFormOverridesProps = {
    ContactUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    repeater?: PrimitiveOverrideProps<TextFieldProps>;
    mode?: PrimitiveOverrideProps<TextFieldProps>;
    power?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    completedAt?: PrimitiveOverrideProps<TextFieldProps>;
    callSign?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    qth?: PrimitiveOverrideProps<TextFieldProps>;
    gridSquare?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextFieldProps>;
    stationPower?: PrimitiveOverrideProps<TextFieldProps>;
    reportSent?: PrimitiveOverrideProps<TextFieldProps>;
    reportReceived?: PrimitiveOverrideProps<TextFieldProps>;
    qslSent?: PrimitiveOverrideProps<SwitchFieldProps>;
    qslReceived?: PrimitiveOverrideProps<SwitchFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContactUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contact?: Contact;
    onSubmit?: (fields: ContactUpdateFormInputValues) => ContactUpdateFormInputValues;
    onSuccess?: (fields: ContactUpdateFormInputValues) => void;
    onError?: (fields: ContactUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactUpdateFormInputValues) => ContactUpdateFormInputValues;
    onValidate?: ContactUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContactUpdateForm(props: ContactUpdateFormProps): React.ReactElement;
