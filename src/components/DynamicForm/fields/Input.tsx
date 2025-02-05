import React from "react";
import { useFormContext } from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import { DynamicFormField, FieldError } from "../types";
import getErrorMessage from "@/helpers/getErrorMessage";

interface InputProps {
  field: DynamicFormField;
  ThemeTextField: (props: TextFieldProps) => React.JSX.Element;
  fieldError?: FieldError;
}

export default function Input({
  field,
  ThemeTextField,
  fieldError,
}: InputProps) {
  const { register } = useFormContext();

  return (
    <div>
      <ThemeTextField
        id={field?.name}
        helperText={fieldError ? getErrorMessage(fieldError) : ""}
        placeholder={field.name}
        label={field.name}
        defaultValue={field.defaultValue}
        {...register(field?.name, {
          required: field.required,
          minLength: field.minLength,
          maxLength: field.maxLength,
        })}
        error={!!fieldError}
        fullWidth
      />
    </div>
  );
}
