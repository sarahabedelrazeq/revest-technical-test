import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { DynamicFormField } from "../types";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

interface RadioInputProps {
  field: DynamicFormField;
}

export default function RadioInput({ field }: RadioInputProps) {
  const {
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const valueDefault = useMemo(
    () => field.listOfValues1?.[Number(field.defaultValue) - 1 || 0],
    [field.defaultValue, field.listOfValues1]
  );

  const selectedValue = useMemo(
    () => getValues(field.name),
    [field.name, getValues]
  );

  useEffect(() => {
    setValue(field?.name, valueDefault);
  }, [field, setValue, valueDefault]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(field?.name, event.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <RadioGroup value={selectedValue} onChange={handleChange} row>
          {field.listOfValues1?.map((item, index) => (
            <FormControlLabel
              value={item}
              control={
                <Radio
                  sx={{
                    color: selectedValue === item ? "green" : "blue",
                    "&.Mui-checked": {
                      color: selectedValue === item ? "green" : "blue",
                    },
                  }}
                />
              }
              label={item}
              key={index}
            />
          ))}
        </RadioGroup>
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
