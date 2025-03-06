import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { NotoSans } from "@/lib/assets";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

export function EndpointButton({ href, active, children, ...props }: Props) {
  const activeStyles = active //
    ? "mx-6 py-2 px-8 rounded-md text-1 text-blue-100"
    : "mx-6 py-2 px-8 rounded-md text-1";

  return (
    <Link
      href={href}
      className={`
        flex font-400
        hover:bg-gray-100
        active:bg-gray-200
        ${activeStyles}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}
