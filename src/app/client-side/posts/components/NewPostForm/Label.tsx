import { ReactNode } from "react";

interface TLabelProps {
  children: ReactNode;
}

export default function Label({ children }: TLabelProps) {
  return <label className="flex flex-col">{children}</label>;
}
