/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactCreateFormInputValues = {
    type?: string;
    frequency?: string;
    repeater?: string;
    allStar?: string;
    echoLink?: string;
    mode?: string;
    power?: string;
    createdAt?: string;
    completedAt?: string;
    callSign?: string;
    name?: string;
    qth?: string;
    attributes?: string[];
    reportSent?: string;
    reportReceived?: string;
    qslSent?: boolean;
    qslReceived?: boolean;
    comments?: string;
    owner?: string;
};
export declare type ContactCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    frequency?: ValidationFunction<string>;
    repeater?: ValidationFunction<string>;
    allStar?: ValidationFunction<string>;
    echoLink?: ValidationFunction<string>;
    mode?: ValidationFunction<string>;
    power?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    completedAt?: ValidationFunction<string>;
    callSign?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    qth?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    reportSent?: ValidationFunction<string>;
    reportReceived?: ValidationFunction<string>;
    qslSent?: ValidationFunction<boolean>;
    qslReceived?: ValidationFunction<boolean>;
    comments?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactCreateFormOverridesProps = {
    ContactCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    repeater?: PrimitiveOverrideProps<TextFieldProps>;
    allStar?: PrimitiveOverrideProps<TextFieldProps>;
    echoLink?: PrimitiveOverrideProps<TextFieldProps>;
    mode?: PrimitiveOverrideProps<TextFieldProps>;
    power?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    completedAt?: PrimitiveOverrideProps<TextFieldProps>;
    callSign?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    qth?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextFieldProps>;
    reportSent?: PrimitiveOverrideProps<TextFieldProps>;
    reportReceived?: PrimitiveOverrideProps<TextFieldProps>;
    qslSent?: PrimitiveOverrideProps<SwitchFieldProps>;
    qslReceived?: PrimitiveOverrideProps<SwitchFieldProps>;
    comments?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactCreateFormInputValues) => ContactCreateFormInputValues;
    onSuccess?: (fields: ContactCreateFormInputValues) => void;
    onError?: (fields: ContactCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactCreateFormInputValues) => ContactCreateFormInputValues;
    onValidate?: ContactCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactCreateForm(props: ContactCreateFormProps): React.ReactElement;
