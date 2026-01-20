import type { Metadata } from "next";
import { Container, Flex, Heading, Text, Link, Blockquote, Quote } from "@radix-ui/themes";
import NextLink from "next/link";
import quotes from "../../../public/quotes.json";

export const metadata: Metadata = {
  title: "Quotes",
  description: "A collection of inspiring quotes gathered over the years by Timothy Summers.",
  openGraph: {
    title: "Quotes | tim's site",
    description: "A collection of inspiring quotes gathered over the years by Timothy Summers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quotes | tim's site",
    description: "A collection of inspiring quotes gathered over the years by Timothy Summers.",
  },
};

export default function Quotes() {
  return (
    <Container size="3" px="4">
      <Flex
        direction="column"
        align="center"
        justify="center"
        py="8"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <Heading as="h1" size="8" mb="1">
          Quotes
        </Heading>
        <Text as="p" size="4" color="gray" mb="5">
          A collection of quotes I have gathered over the years.
        </Text>

        <Flex direction="column" gap="5" mt="6" width="100%" maxWidth="600px" mb="6">
          {quotes.quotes.map((q, i) => (
            <Blockquote key={i}>
              <Text size="4">
                <Quote>{q.quote}</Quote>
              </Text>
              <Text as="p" size="2" color="gray" mt="2">
                {q.author}
              </Text>
            </Blockquote>
          ))}
        </Flex>

        <Link asChild mt="4" mb="6">
          <NextLink href="/">
            <Text size="3" weight="medium">← Back to Home</Text>
          </NextLink>
        </Link>
      </Flex>
    </Container>
  );
}
