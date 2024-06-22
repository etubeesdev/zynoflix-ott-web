"use client";
import Header from "@/components/layout/header";
import "./globals.css";

import { Toaster, toast } from "sonner";
import { AuthProvider } from "@/components/provider/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <AuthProvider>{children}</AuthProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
