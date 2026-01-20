import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { Toaster } from "sonner";
import LegalSchema from "@/components/LegalSchema";

export const metadata: Metadata = {
  title: "Bluecrest Attorneys — Top Law Firm in Nigeria",
  description:
    "Get expert legal advice from Bluecrest Attorneys, a leading law firm in Lagos, Nigeria.",
  // description:
  //   "Bluecrest Attorneys provides expert legal counsel in corporate, commercial, and dispute resolution matters. Trusted by SMEs and enterprises across Nigeria for strategic, results‑driven representation",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/images/favicon-white.png",
      },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LegalSchema />
        <Providers>{children}</Providers>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
