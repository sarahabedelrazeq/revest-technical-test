"use client";
import DynamicForm from "@/components/DynamicForm";
import { DynamicFormField } from "@/components/DynamicForm/types";
import data from "@/data/dynamic-form-signup-fields.json";

export default function FormRender() {
  const fields: DynamicFormField[] = (data as { data: DynamicFormField[] })
    .data;

  return (
    <div>
      <DynamicForm fields={fields} />
    </div>
  );
}
