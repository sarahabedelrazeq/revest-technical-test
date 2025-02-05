import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export default function ThemeTextField(props: TextFieldProps) {
  return <TextField {...props} className="w-100" variant="outlined" />;
}
