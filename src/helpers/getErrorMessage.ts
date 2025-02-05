import { FieldError } from "@/components/DynamicForm/types";

export default function getErrorMessage(fieldError: FieldError) {
    if (!fieldError) return;

    switch (fieldError.type) {
      case "required":
        return "This field is required";
      case "maxLength":
        return `Maximum length is ${fieldError?.message || "not specified"}`;
      case "minLength":
        return `Minimum length is ${fieldError?.message || "not specified"}`;
      case "validate":
        return "Validation failed";
      default:
        return "Invalid input";
    }
  }
