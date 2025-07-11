import type { Metadata } from "next";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timothy Summers",
  description: "I like developing tools people love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
