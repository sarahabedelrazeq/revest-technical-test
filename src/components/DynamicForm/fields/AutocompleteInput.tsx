import Autocomplete from "@mui/material/Autocomplete";
import classNames from "classnames";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { TextFieldProps } from "@mui/material";
import { DynamicFormField } from "../types";

interface AutocompleteInputProps {
  field: DynamicFormField;
  ThemeTextField: (props: TextFieldProps) => React.JSX.Element;
}

export default function AutocompleteInput({
  field,
  ThemeTextField,
}: AutocompleteInputProps) {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const valueDefault = useMemo(
    () => field.listOfValues1?.[Number(field.defaultValue) - 1 || 0],
    [field.defaultValue, field.listOfValues1]
  );

  useEffect(() => {
    setValue(field?.name, valueDefault);
  }, [field, setValue, valueDefault]);

  return (
    <div>
      <div className="mb-3">
        <Autocomplete
          onChange={(_, newValue) => {
            setValue(field?.name, newValue);
          }}
          getOptionLabel={(option) => option}
          defaultValue={valueDefault}
          filterSelectedOptions
          id={field.name}
          options={field?.listOfValues1 || []}
          className={classNames("w-100", {
            "border-danger": errors[field?.name],
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
      </div>
      <div>
        {errors[field?.name] && (
          <p className="text-danger" role="alert">
            {errors && (errors[field?.name]?.message as string)}
          </p>
        )}
      </div>
    </div>
  );
}
