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
export declare type NetCreateFormInputValues = {
    owner?: string;
};
export declare type NetCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NetCreateFormOverridesProps = {
    NetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NetCreateFormProps = React.PropsWithChildren<{
    overrides?: NetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NetCreateFormInputValues) => NetCreateFormInputValues;
    onSuccess?: (fields: NetCreateFormInputValues) => void;
    onError?: (fields: NetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NetCreateFormInputValues) => NetCreateFormInputValues;
    onValidate?: NetCreateFormValidationValues;
} & React.CSSProperties>;
export default function NetCreateForm(props: NetCreateFormProps): React.ReactElement;
