/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Station } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StationUpdateFormInputValues = {
    callSign?: string;
    name?: string;
    location?: string;
    notes?: string;
    attributes?: string[];
    owner?: string;
};
export declare type StationUpdateFormValidationValues = {
    callSign?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StationUpdateFormOverridesProps = {
    StationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    callSign?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StationUpdateFormProps = React.PropsWithChildren<{
    overrides?: StationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    station?: Station;
    onSubmit?: (fields: StationUpdateFormInputValues) => StationUpdateFormInputValues;
    onSuccess?: (fields: StationUpdateFormInputValues) => void;
    onError?: (fields: StationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StationUpdateFormInputValues) => StationUpdateFormInputValues;
    onValidate?: StationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StationUpdateForm(props: StationUpdateFormProps): React.ReactElement;
