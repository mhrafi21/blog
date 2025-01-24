import React from "react";
import { FieldError } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputFieldProps {
  name?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: any;
  error?: FieldError;
  disabled?: boolean;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  required?: boolean;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        id={name}
        type={type}
        {...register}
        placeholder={placeholder}
        className=" mt-2 h-12 w-full border focus:border-indigo-500"
      />
      {error && <p className="text-red-500 mt-3">{error.message}</p>}
    </div>
  );
};

export default InputField;
