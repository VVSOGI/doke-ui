import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

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
        flex
        ${activeStyles}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}
