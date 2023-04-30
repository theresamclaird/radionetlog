/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Repeater } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RepeaterUpdateFormInputValues = {
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
export declare type RepeaterUpdateFormValidationValues = {
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
export declare type RepeaterUpdateFormOverridesProps = {
    RepeaterUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type RepeaterUpdateFormProps = React.PropsWithChildren<{
    overrides?: RepeaterUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    repeater?: Repeater;
    onSubmit?: (fields: RepeaterUpdateFormInputValues) => RepeaterUpdateFormInputValues;
    onSuccess?: (fields: RepeaterUpdateFormInputValues) => void;
    onError?: (fields: RepeaterUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RepeaterUpdateFormInputValues) => RepeaterUpdateFormInputValues;
    onValidate?: RepeaterUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RepeaterUpdateForm(props: RepeaterUpdateFormProps): React.ReactElement;
