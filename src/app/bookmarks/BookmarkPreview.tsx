import bookmarks from "../../../public/bookmarks.json";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Container, Flex, Text } from "@radix-ui/themes";
import { BookmarkItem, BookmarkLink } from "./BookmarkLink";

const PREVIEW_COUNT = 6;

export function BookmarkPreview() {
  const items = (bookmarks.bookmarks as BookmarkItem[]).slice(0, PREVIEW_COUNT);

  return (
    <Container
      id="bookmarks-preview"
      size="3"
      px={{ initial: "4", md: "6" }}
      py={{ initial: "7", sm: "8", md: "9" }}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="5"
        style={{ minHeight: "60svh" }}
      >
        <Flex
          direction="column"
          width="100%"
          gap="6"
          align="center"
          style={{ maxWidth: 750 }}
        >
          <Text size="2" color="gray" weight="medium">
            Webstuff I like:
          </Text>

          <Flex
            direction="column"
            gap="2"
            align="start"
            style={{ width: "fit-content", maxWidth: "100%" }}
          >
            {items.map((b) => (
              <BookmarkLink key={b.url} bookmark={b} />
            ))}
          </Flex>

          <Button asChild variant="outline" color="gray" size="1">
            <NextLink href="/bookmarks">
              All Bookmarks <ArrowRight size={16} />
            </NextLink>
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
