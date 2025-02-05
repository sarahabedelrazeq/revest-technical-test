import { TextField, TextFieldProps, Typography } from "@mui/material";
import React from "react";

export default function ThemeTextField({
  helperText,
  ...props
}: TextFieldProps) {
  return (
    <TextField
      {...props}
      className="w-100"
      variant="outlined"
      helperText={
        helperText ? (
          <Typography color="red" role="alert">
            {helperText}
          </Typography>
        ) : (
          ""
        )
      }
    />
  );
}
