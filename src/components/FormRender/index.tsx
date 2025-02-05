"use client";
import DynamicForm from "@/components/DynamicForm";
import {
  DynamicFormField,
  DynamicFormFieldType,
} from "@/components/DynamicForm/types";

export default function FormRender() {
  const fields: DynamicFormField[] = [
    {
      id: 1,
      name: "Full Name",
      fieldType: DynamicFormFieldType.TEXT,
      minLength: 1,
      maxLength: 100,
      defaultValue: "John Doe",
      required: true,
    },
    {
      id: 2,
      name: "Email",
      fieldType: DynamicFormFieldType.TEXT,
      minLength: 1,
      maxLength: 50,
      defaultValue: "hello@mail.com",
      required: true,
    },
    {
      id: 6,
      name: "Gender",
      fieldType: DynamicFormFieldType.LIST,
      defaultValue: "1",
      required: true,
      listOfValues1: ["Male", "Female", "Others"],
    },

    {
      id: 7,
      name: "Love React?",
      fieldType: DynamicFormFieldType.RADIO,
      defaultValue: "1",
      required: true,
      listOfValues1: ["Yes", "No"],
    },
  ];

  return (
    <div>
      <DynamicForm fields={fields} />
    </div>
  );
}
