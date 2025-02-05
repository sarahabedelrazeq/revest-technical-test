import React from "react";
import { useFormContext } from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import { DynamicFormField } from "../types";

interface InputProps {
  field: DynamicFormField;
  ThemeTextField: (props: TextFieldProps) => React.JSX.Element;
}

export default function Input({ field, ThemeTextField }: InputProps) {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div>
      <ThemeTextField
        id={field?.name}
        helperText={errors[field?.name]?.message as string}
        placeholder={field.name}
        label={field.name}
        defaultValue={field.defaultValue}
        {...register(field?.name, {
          required: field.required,
          minLength: field.minLength,
          maxLength: field.maxLength,
        })}
        fullWidth
      />
    </div>
  );
}
