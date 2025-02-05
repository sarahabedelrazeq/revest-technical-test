import { FieldErrorsImpl } from "react-hook-form";

export enum DynamicFormFieldType {
  TEXT = "TEXT",
  LIST = "LIST",
  RADIO = "RADIO",
}

export interface DynamicFormField {
  id: number;
  name: string;
  fieldType: DynamicFormFieldType;
  minLength?: number;
  maxLength?: number;
  defaultValue: string;
  required: true;
  listOfValues1?: string[];
}

export type FieldError = FieldErrorsImpl[string] | undefined
