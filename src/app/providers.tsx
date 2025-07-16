'use client';

import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Theme>
        {children}
      </Theme>
    </ThemeProvider>
  );
} 