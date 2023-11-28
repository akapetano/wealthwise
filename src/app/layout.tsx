import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sarabun } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({ weight: ["400", "600", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WealthWise",
  description: "Financial Freedom for Everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sarabun.className}>
        <div className="bg-slate-900">{children}</div>
      </body>
    </html>
  );
}
