import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DynamicFormField, FieldError } from "../types";
import { Radio, RadioGroup, FormControlLabel, Typography } from "@mui/material";
import getErrorMessage from "@/helpers/getErrorMessage";

interface RadioInputProps {
  field: DynamicFormField;
  fieldError?: FieldError;
}

export default function RadioInput({ field, fieldError }: RadioInputProps) {
  const { control } = useFormContext();

  const valueDefault = useMemo(
    () => field.listOfValues1?.[Number(field.defaultValue) - 1 || 0],
    [field.defaultValue, field.listOfValues1]
  );

  return (
    <div>
      <div>
        <Controller
          name={field.name}
          defaultValue={valueDefault}
          control={control}
          rules={{
            required: field.required,
          }}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              value={value}
              onChange={onChange}
              row
            >
              {field.listOfValues1?.map((item, index) => (
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                  key={index}
                />
              ))}
            </RadioGroup>
          )}
        />
      </div>
      <div>
        {fieldError && (
          <Typography color="red" role="alert" mt="3px" mx="14px">
            {getErrorMessage(fieldError)}fieldError
          </Typography>
        )}
      </div>
    </div>
  );
}
