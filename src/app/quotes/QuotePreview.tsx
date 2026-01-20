"use client";

import { ArrowRight, Dices } from "lucide-react";
import quotes from "../../../public/quotes.json";
import { Button, Container, Flex, Quote, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import TextType from "./TextType";
import NextLink from "next/link";

export function QuotePreview() {
  const [index, setIndex] = useState<number>(-1);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.quotes.length));

    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const current = index >= 0 ? quotes.quotes[index] : null;

  const handleNewQuote = () => {
    if (quotes.quotes.length === 0) return;
    let next = Math.floor(Math.random() * quotes.quotes.length);
    if (quotes.quotes.length > 1 && next === index) {
      next = (next + 1) % quotes.quotes.length;
    }
    setIndex(next);
  };

  return (
    <Container
      id="quote-preview"
      size="3"
      px={{ initial: "4", md: "6" }}
      py={{ initial: "7", sm: "8", md: "9" }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ minHeight: "60svh" }}
      >
        <Flex
          direction="column"
          align="center"
          style={{ maxWidth: 750, width: "100%", textAlign: "center" }}
        >
          <Text size="2" color="gray" weight="medium" mb="4">
            {current ? current.author : ""}
          </Text>
          <Text size="6">
            <Quote wrap={isLargeScreen ? "nowrap" : undefined}>
              <span style={{ position: "relative", display: "inline-block" }}>
                {/* Invisible full text to reserve layout space */}
                <span
                  style={{ visibility: "hidden" }}
                  aria-hidden="true"
                >
                  {current ? current.quote : "\u00A0"}
                  {/* Extra space to account for cursor */}
                  <span className="ml-6">|</span>
                </span>
                {/* Animated text positioned on top */}
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <TextType
                    key={index}
                    text={[current ? current.quote : ""]}
                    typingSpeed={35}
                    pauseDuration={300}
                    showCursor={true}
                    cursorCharacter="|"
                    loop={false}
                    startOnVisible
                  />
                </span>
              </span>
            </Quote>
          </Text>
        </Flex>
        <Flex direction="row" gap="2" mt="4">
          <Button variant="soft" onClick={handleNewQuote} size="1">
            New Quote <Dices size={16} />
          </Button>
          <Button asChild variant="outline" color="gray" size="1">
            <NextLink href="/quotes">
              All Quotes <ArrowRight size={16} />
            </NextLink>
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
