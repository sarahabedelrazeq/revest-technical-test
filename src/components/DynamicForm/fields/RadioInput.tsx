import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DynamicFormField, FieldError } from "../types";
import { Radio, RadioGroup, Typography, FormLabel } from "@mui/material";
import getErrorMessage from "@/helpers/getErrorMessage";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

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
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{field.label}</FormLabel>
      <Controller
        name={field.name}
        defaultValue={valueDefault}
        control={control}
        rules={{
          required: field.required,
        }}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange} row>
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
      {fieldError && (
        <Typography color="red" role="alert" mt="3px" mx="14px">
          {getErrorMessage(fieldError)}fieldError
        </Typography>
      )}
    </FormControl>
  );
}
