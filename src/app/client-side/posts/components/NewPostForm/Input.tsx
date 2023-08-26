import { UseFormRegisterReturn } from "react-hook-form";
import Label from "./Label";
import { InputHTMLAttributes } from "react";
import FieldErr from "./FieldErr";

interface TInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  register: UseFormRegisterReturn<string>;
  label: string;
  errMsg?: string;
}

export default function Input({
  register,
  type,
  label,
  errMsg,
  ...attributes
}: TInputProps) {
  return (
    <Label>
      {label}
      <input
        type={type}
        {...register}
        {...attributes}
        className="border py-1 px-2 border-gray-300 rounded"
      />
      <FieldErr content={errMsg} />
    </Label>
  );
}
