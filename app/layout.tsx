import { Metadata } from "next";
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";
import "./globals.css";

export interface CustomIconDescriptorType extends IconDescriptor {
  precedence?: string;
}

const icon: CustomIconDescriptorType = {
  rel: "stylesheet",
  url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
  precedence: "default",
};

export const metadata: Metadata = {
  icons: {
    other: icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
