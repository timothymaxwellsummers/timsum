import type { Metadata } from "next";
import Providers from "@/app/providers";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "tim's site",
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
        <Theme
          accentColor="green"
          grayColor="gray"
          panelBackground="translucent"
          scaling="100%"
          radius="full"
        >
          <Providers>{children}</Providers>
        </Theme>
      </body>
    </html>
  );
}
