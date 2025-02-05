import Autocomplete from "@mui/material/Autocomplete";
import classNames from "classnames";
import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextFieldProps, Typography } from "@mui/material";
import { DynamicFormField, FieldError } from "../types";
import getErrorMessage from "@/helpers/getErrorMessage";

interface AutocompleteInputProps {
  field: DynamicFormField;
  ThemeTextField: (props: TextFieldProps) => React.JSX.Element;
  fieldError?: FieldError;
}

export default function AutocompleteInput({
  field,
  ThemeTextField,
  fieldError,
}: AutocompleteInputProps) {
  const { control } = useFormContext();

  const valueDefault = useMemo(
    () => field.listOfValues1?.[Number(field.defaultValue) - 1 || 0],
    [field.defaultValue, field.listOfValues1]
  );

  return (
    <div>
      <div className="mb-3">
        <Controller
          name={field.name}
          defaultValue={valueDefault}
          control={control}
          rules={{
            required: field.required,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Autocomplete
              value={value}
              onChange={(_, newValue) => {
                onChange(newValue);
              }}
              onBlur={onBlur}
              filterSelectedOptions
              id={field.name}
              options={field?.listOfValues1 || []}
              className={classNames("w-100", {
                "border-danger": fieldError,
              })}
              renderInput={(params) => {
                return (
                  <ThemeTextField
                    {...params}
                    label={field?.name}
                    placeholder={field.name}
                  />
                );
              }}
            />
          )}
        />
      </div>
      <div>
        {fieldError && (
          <Typography color="red" role="alert">
            {getErrorMessage(fieldError)}
          </Typography>
        )}
      </div>
    </div>
  );
}
