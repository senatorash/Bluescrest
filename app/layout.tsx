import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Bluecrest Attorneys — Business & Corporate Law Firm in Nigeria",
  description:
    "Bluecrest Attorneys provides expert legal counsel in corporate, commercial, and dispute resolution matters. Trusted by SMEs and enterprises across Nigeria for strategic, results‑driven representation",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "images/favicon-blue.png",
        href: "images/favicon-blue.png",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "images/favicon-white.png",
        href: "images/favicon-white.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
