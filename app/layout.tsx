import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next 13 App 2",
  description: "Dummy app for exploring Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
