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
export declare type RepeaterCreateFormInputValues = {
    callSign?: string;
    inputFrequency?: string;
    inputTone?: string;
    outputFrequency?: string;
    outputTone?: string;
    offset?: string;
    grid?: string;
    notes?: string;
    sponsor?: string;
    echoLink?: string;
    allStar?: string;
    url?: string;
    owner?: string;
};
export declare type RepeaterCreateFormValidationValues = {
    callSign?: ValidationFunction<string>;
    inputFrequency?: ValidationFunction<string>;
    inputTone?: ValidationFunction<string>;
    outputFrequency?: ValidationFunction<string>;
    outputTone?: ValidationFunction<string>;
    offset?: ValidationFunction<string>;
    grid?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    sponsor?: ValidationFunction<string>;
    echoLink?: ValidationFunction<string>;
    allStar?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RepeaterCreateFormOverridesProps = {
    RepeaterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    callSign?: PrimitiveOverrideProps<TextFieldProps>;
    inputFrequency?: PrimitiveOverrideProps<TextFieldProps>;
    inputTone?: PrimitiveOverrideProps<TextFieldProps>;
    outputFrequency?: PrimitiveOverrideProps<TextFieldProps>;
    outputTone?: PrimitiveOverrideProps<TextFieldProps>;
    offset?: PrimitiveOverrideProps<TextFieldProps>;
    grid?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    sponsor?: PrimitiveOverrideProps<TextFieldProps>;
    echoLink?: PrimitiveOverrideProps<TextFieldProps>;
    allStar?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RepeaterCreateFormProps = React.PropsWithChildren<{
    overrides?: RepeaterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RepeaterCreateFormInputValues) => RepeaterCreateFormInputValues;
    onSuccess?: (fields: RepeaterCreateFormInputValues) => void;
    onError?: (fields: RepeaterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RepeaterCreateFormInputValues) => RepeaterCreateFormInputValues;
    onValidate?: RepeaterCreateFormValidationValues;
} & React.CSSProperties>;
export default function RepeaterCreateForm(props: RepeaterCreateFormProps): React.ReactElement;
