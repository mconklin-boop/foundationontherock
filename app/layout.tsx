import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://foundationontherock.org"),
  title: {
    default: "Foundation on the Rock | Restoring Lives",
    template: "%s | Foundation on the Rock"
  },
  description:
    "Foundation on the Rock is a Colorado faith-based nonprofit providing Christian outreach, housing stabilization, transitional support services, faith-based mentorship, and community restoration ministry.",
  keywords: [
    "Colorado faith-based nonprofit",
    "Christian outreach organization",
    "housing stabilization nonprofit",
    "transitional support services",
    "faith-based mentorship",
    "community restoration ministry",
    "Foundation on the Rock"
  ],
  openGraph: {
    title: "Foundation on the Rock",
    description:
      "Restoring lives, rebuilding foundations, and strengthening communities through faith-based nonprofit support.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
