"use client";
import Header from "@/components/layout/header";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/provider/AuthProvider";
import Footer from "@/components/shared/footer";
import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>ZynoflixOTT</title>
        <link rel="icon" href="/logo_sm.png" sizes="any" />
        <meta
          name="description"
          content="Watch and upload short films on ZynoflixOTT, the premier OTT platform for independent filmmakers."
        />
        <meta
          name="keywords"
          content="OTT, short films, independent films, streaming"
        />
        <meta name="author" content="ZynoflixOTT" />
      </Head>

      <body>
        <Header />
        <AuthProvider>{children}</AuthProvider>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
