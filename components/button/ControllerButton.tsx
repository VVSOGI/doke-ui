import { ButtonHTMLAttributes } from "react";
import { NotoSans } from "@/lib/assets";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ControllerButton({ children, ...props }: Props) {
  return (
    <button
      className={`
        flex items-center justify-between py-2 px-6 rounded-md text-1 font-500 cursor-pointer select-none
        hover:bg-gray-100
        active:bg-gray-200
        ${NotoSans.className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
