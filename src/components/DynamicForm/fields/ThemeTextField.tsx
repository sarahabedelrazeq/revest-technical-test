import { TextField, TextFieldProps, Typography } from "@mui/material";
import React from "react";

export default function ThemeTextField({
  helperText,
  ...props
}: TextFieldProps) {
  return (
    <TextField
      {...props}
      variant="outlined"
      helperText={
        helperText ? (
          <Typography component="span" color="red" role="alert">
            {helperText}
          </Typography>
        ) : (
          ""
        )
      }
    />
  );
}
