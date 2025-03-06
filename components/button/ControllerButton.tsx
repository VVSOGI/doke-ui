import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ControllerButton({ children, ...props }: Props) {
  return (
    <button
      className={`
        flex items-center justify-between py-2 px-6 rounded-md text-0 cursor-pointer select-none
        hover:bg-gray-100
        active:bg-gray-200
      `}
      {...props}
    >
      {children}
    </button>
  );
}
