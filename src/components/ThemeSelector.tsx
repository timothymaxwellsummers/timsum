'use client';

import { Select } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Select.Root 
      value={mounted ? theme : 'system'} 
      onValueChange={setTheme}
      disabled={!mounted}
    >
      <Select.Trigger variant="soft" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Modes</Select.Label>
          <Select.Item value="system">System</Select.Item>
          <Select.Item value="dark">Dark</Select.Item>
          <Select.Item value="light">Light</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
} 