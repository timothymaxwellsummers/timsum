'use client';

import '@radix-ui/themes/styles.css';
import { Container, Section, Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import NavBar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute='class'>
          <Theme
            accentColor="green"
            grayColor="gray"
            panelBackground="translucent"
            scaling="100%"
            radius="full"
          >
            <NavBar />
            <Section>
            {children}
            </Section>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}
