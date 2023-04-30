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
export declare type StationCreateFormInputValues = {
    callSign?: string;
    grid?: string;
    name?: string;
    qth?: string;
    notes?: string;
    attributes?: string[];
    owner?: string;
};
export declare type StationCreateFormValidationValues = {
    callSign?: ValidationFunction<string>;
    grid?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    qth?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StationCreateFormOverridesProps = {
    StationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    callSign?: PrimitiveOverrideProps<TextFieldProps>;
    grid?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    qth?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StationCreateFormProps = React.PropsWithChildren<{
    overrides?: StationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StationCreateFormInputValues) => StationCreateFormInputValues;
    onSuccess?: (fields: StationCreateFormInputValues) => void;
    onError?: (fields: StationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StationCreateFormInputValues) => StationCreateFormInputValues;
    onValidate?: StationCreateFormValidationValues;
} & React.CSSProperties>;
export default function StationCreateForm(props: StationCreateFormProps): React.ReactElement;
