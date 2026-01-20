import type { Metadata } from "next";
import bookmarks from "../../../public/bookmarks.json";
import { Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";
import { BookmarkItem, BookmarkLink } from "./BookmarkLink";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "A curated collection of helpful tools and websites by Timothy Summers.",
  openGraph: {
    title: "Bookmarks | tim's site",
    description: "A curated collection of helpful tools and websites by Timothy Summers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookmarks | tim's site",
    description: "A curated collection of helpful tools and websites by Timothy Summers.",
  },
};

export default function Bookmarks() {
  const items = bookmarks.bookmarks as BookmarkItem[];

  return (
    <Container size="3" px="4">
      <Flex
        direction="column"
        align="center"
        justify="center"
        py="8"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <Heading as="h1" size="8" mb="4">
          Bookmarks
        </Heading>
        <Text size="4" color="gray" mb="6">
          Helpful tools and sites I&apos;ve found.
        </Text>

        <Flex
          direction="column"
          gap="2"
          align="start"
          mb="6"
          style={{ width: "fit-content", maxWidth: "100%" }}
        >
          {items.map((b) => (
            <BookmarkLink key={b.url} bookmark={b} />
          ))}
        </Flex>

        <Link asChild>
          <NextLink href="/">
            <Text size="3" weight="medium">← Back to Home</Text>
          </NextLink>
        </Link>
      </Flex>
    </Container>
  );
}
