/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactCreateFormInputValues = {
    type?: string;
    repeater?: string;
    frequency?: string;
    power?: string;
    createdAt?: string;
    callSign?: string;
    name?: string;
    qth?: string;
    attributes?: string[];
    reportSent?: string;
    reportReceived?: string;
    comments?: string;
    owner?: string;
};
export declare type ContactCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    repeater?: ValidationFunction<string>;
    frequency?: ValidationFunction<string>;
    power?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    callSign?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    qth?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    reportSent?: ValidationFunction<string>;
    reportReceived?: ValidationFunction<string>;
    comments?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactCreateFormOverridesProps = {
    ContactCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    repeater?: PrimitiveOverrideProps<TextFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    power?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    callSign?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    qth?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextFieldProps>;
    reportSent?: PrimitiveOverrideProps<TextFieldProps>;
    reportReceived?: PrimitiveOverrideProps<TextFieldProps>;
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
