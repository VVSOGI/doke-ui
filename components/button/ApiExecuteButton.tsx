import React, { ButtonHTMLAttributes } from "react";
import { NotoSans } from "@/lib/assets";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function ApiExecuteButton({ className, ...props }: Props) {
  return (
    <button
      className={`
        py-4 bg-blue-200 text-gray-100 font-500 rounded-sm select-none
        ${NotoSans.className}
        hover:bg-blue-300
        active:bg-blue-200
        ${className}
      `}
      {...props}
    >
      EXECUTE
    </button>
  );
}
