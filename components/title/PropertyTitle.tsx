import React from "react";
import { NotoSans } from "@/lib/assets";

interface Props {
  children: React.ReactNode;
}

export function PropertyTitle({ children }: Props) {
  return (
    <div
      className={`
          w-full border-b border-gray-200 pb-5 text-3 font-300 text-gray-500
          ${NotoSans.className}
        `}
    >
      {children}
    </div>
  );
}
