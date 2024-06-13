import "./globals.css";

import { Toaster, toast } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
