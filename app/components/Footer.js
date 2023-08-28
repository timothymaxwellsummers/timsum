'use client';

import { Flex, Text, Switch, Container, Section } from '@radix-ui/themes';
import footerStyles from "../../styles/footer.module.css";
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
                <select value={theme} onChange={e => setTheme(e.target.value)}>
                    <option value="system">System</option>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
            </Section>
        </Container>
    );
}

export default Footer;