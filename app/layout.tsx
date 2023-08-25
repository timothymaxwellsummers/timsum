'use client';

import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

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
            accentColor="crimson"
            grayColor="gray"
            panelBackground="translucent"
            scaling="100%"
            radius="full"
          >
            {children}
          </Theme>
        </ThemeProvider>
        </body>
    </html>
  )
}
