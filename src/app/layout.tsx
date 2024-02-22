import { inter } from "@/ui/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Front End Skills Test",
  description: "Project developed for a technical test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
