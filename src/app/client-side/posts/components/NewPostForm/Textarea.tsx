import { UseFormRegisterReturn } from "react-hook-form";
import Label from "./Label";
import { TextareaHTMLAttributes } from "react";
import FieldErr from "./FieldErr";

interface TInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegisterReturn<string>;
  label: string;
  errMsg?: string;
}

export default function Textarea({
  register,
  label,
  errMsg,
  ...attributes
}: TInputProps) {
  return (
    <Label>
      {label}
      <textarea
        className="border py-1 px-2 border-gray-300 rounded"
        {...register}
        {...attributes}
      />
      <FieldErr content={errMsg} />
    </Label>
  );
}
