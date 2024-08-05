import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/shared/libs/styled-components/styled-components-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my-bookshelf",
  description: "Practicing Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
