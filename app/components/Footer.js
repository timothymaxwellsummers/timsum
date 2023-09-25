'use client';

import { Flex, Button, Container, Section, Select } from '@radix-ui/themes';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from "react";


function Footer() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }


    return (
        <Container size="3">
            <Section size="1">
                <Flex justify="between">
                <a href="https://github.com/timothymaxwellsummers/timsum" target="_blank" style={{ textDecoration: 'none', }}>
                <Button variant="outline" color="purple"><GitHubLogoIcon width="16" height="16" />Find this proj. on GitHub</Button>
                </a>
                <Select.Root value={theme} onValueChange={setTheme}>
                    <Select.Trigger  variant="soft" />
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Modes</Select.Label>
                            <Select.Item value="system">System</Select.Item>
                            <Select.Item value="dark">Dark</Select.Item>
                            <Select.Item value="light">Light</Select.Item>
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
                </Flex>
            </Section>
        </Container>
    );
}

export default Footer;