import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active: boolean;
  children: React.ReactNode;
}

export function SidebarButton({ active, children }: Props) {
  const activeStyles = active //
    ? "mx-6 py-4 px-8 rounded-md text-0 text-blue-100"
    : "mx-6 py-4 px-8 rounded-md text-0";

  return (
    <Link
      href={""}
      className={`
        flex
        ${activeStyles}
      `}
    >
      {children}
    </Link>
  );
}
