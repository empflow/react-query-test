import { UseFormRegisterReturn } from "react-hook-form";

interface TInputProps {
  type: string;
  register: UseFormRegisterReturn<string>;
}

export default function Input({ register, type }: TInputProps) {
  return (
    <input
      type={type}
      {...register}
      className="border p-1 border-gray-200 rounded"
    />
  );
}
