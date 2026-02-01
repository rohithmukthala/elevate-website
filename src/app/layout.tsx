import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BookingProvider, PageLoader } from "@/components/ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevate | Web Design Agency",
  description:
    "We design and build high-converting websites that help businesses grow. Landing pages, business websites, e-commerce, and redesigns.",
  keywords: [
    "web design",
    "web development",
    "landing pages",
    "business websites",
    "e-commerce",
    "website redesign",
  ],
  authors: [{ name: "Elevate Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elevate.agency",
    siteName: "Elevate",
    title: "Elevate | Web Design Agency",
    description:
      "We design and build high-converting websites that help businesses grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate | Web Design Agency",
    description:
      "We design and build high-converting websites that help businesses grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BookingProvider>
          <PageLoader />
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
