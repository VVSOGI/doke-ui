import React, { HTMLAttributes } from "react";
import { NotoSans } from "@/lib/assets";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PropertyTitle({ children, ...props }: Props) {
  return (
    <div
      className={`
        w-full border-b border-gray-200 pb-5 text-3 font-300 text-gray-500
        ${NotoSans.className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
