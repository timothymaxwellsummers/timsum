'use client';

import { Flex, Text, Switch, Container, Section } from '@radix-ui/themes';
import footerStyles from "../../styles/footer.module.css";
import { useTheme } from 'next-themes'

export default function Footer() {

    const { theme, setTheme } = useTheme()


    function inActiveTheme(theme) {
        return theme === 'light' ? 'dark' : 'light'
    }

    return (
        <Container size="3">
            <Section size="1">
            <Text size="2">
                <label>
                <span onClick={() => setTheme(inActiveTheme(theme))}> <Switch mr="2" variant="soft" defaultChecked/></span>
                    Switch to {inActiveTheme(theme)} mode
                </label>
            </Text>
            </Section>
        </Container>
    );
}