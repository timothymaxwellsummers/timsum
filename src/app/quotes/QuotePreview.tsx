"use client";

import { ArrowRight, Dices } from "lucide-react";
import quotes from "../../../public/quotes.json";
import { Button, Flex, Quote, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import TextType from "./TextType";
import NextLink from "next/link";

export function QuotePreview() {
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.quotes.length));
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
    <Flex
      id="quote-preview"
      direction="column"
      align="center"
      justify="center"
      style={{ height: "60svh", marginTop: "5svh", marginBottom: "5svh", marginLeft: "2", marginRight: "2" }}
    >
      <Flex direction="column" style={{ maxWidth: 750, width: "100%", textAlign: "center" }}>
        <Text size="2" color="gray" weight="medium" mb="4">
          {current ? current.author : ""}
        </Text>
        <Text size="6">
          <Quote wrap="nowrap">
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
  );
}
