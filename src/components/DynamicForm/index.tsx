"use client";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import AutocompleteInput from "./fields/AutocompleteInput";
import Input from "./fields/Input";
import ThemeTextField from "./fields/ThemeTextField";
import { DynamicFormField, DynamicFormFieldType } from "./types";
import Grid from "@mui/material/Grid2";
import { Box, Button } from "@mui/material";
import RadioInput from "./fields/RadioInput";

interface DynamicFormProps {
  fields: DynamicFormField[];
}

function DynamicForm<T extends FieldValues>({ fields }: DynamicFormProps) {
  const methods = useForm<T>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data: T) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {fields.map((field, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              {field.fieldType === DynamicFormFieldType.LIST ? (
                <AutocompleteInput
                  field={field}
                  ThemeTextField={ThemeTextField}
                  fieldError={errors[field.name]}
                />
              ) : field.fieldType === DynamicFormFieldType.RADIO ? (
                <RadioInput field={field} fieldError={errors[field.name]} />
              ) : (
                <Input
                  field={field}
                  ThemeTextField={ThemeTextField}
                  fieldError={errors[field.name]}
                />
              )}
            </Grid>
          ))}
          <Grid size={12}>
            <Button variant="contained" type="submit" fullWidth>
              submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
}

export default React.memo(DynamicForm);
