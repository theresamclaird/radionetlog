/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Net } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NetUpdateFormInputValues = {
    repeater?: string;
    frequency?: string;
    mode?: string;
    power?: string;
    createdAt?: string;
    completedAt?: string;
    owner?: string;
};
export declare type NetUpdateFormValidationValues = {
    repeater?: ValidationFunction<string>;
    frequency?: ValidationFunction<string>;
    mode?: ValidationFunction<string>;
    power?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    completedAt?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NetUpdateFormOverridesProps = {
    NetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    repeater?: PrimitiveOverrideProps<TextFieldProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    mode?: PrimitiveOverrideProps<TextFieldProps>;
    power?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    completedAt?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NetUpdateFormProps = React.PropsWithChildren<{
    overrides?: NetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    net?: Net;
    onSubmit?: (fields: NetUpdateFormInputValues) => NetUpdateFormInputValues;
    onSuccess?: (fields: NetUpdateFormInputValues) => void;
    onError?: (fields: NetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NetUpdateFormInputValues) => NetUpdateFormInputValues;
    onValidate?: NetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NetUpdateForm(props: NetUpdateFormProps): React.ReactElement;
