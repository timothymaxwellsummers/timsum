import bookmarks from "../../../public/bookmarks.json";
import NextLink from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { Box, Button, Container, Flex, Link, Text } from "@radix-ui/themes";

type BookmarkItem = {
  title: string;
  description?: string;
  url: string;
};

const PREVIEW_COUNT = 6;

function getDomain(url: string) {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function faviconUrlFor(url: string) {
  const domain = getDomain(url);
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
    domain
  )}&sz=64`;
}

export function BookmarkPreview() {
  const items = (bookmarks.bookmarks as BookmarkItem[]).slice(0, PREVIEW_COUNT);

  return (
    <Container id="bookmarks-preview" size="3">
      <Flex
        direction="column"
        align="center"
        justify="center"
        py="8"
        gap="5"
        style={{ minHeight: "60svh" }}
      >
        <Flex
          direction="column"
          width="100%"
          gap="4"
          align="center"
          style={{ maxWidth: 750 }}
        >
          <Text size="4">
            <i>Webstuff I like:</i>
          </Text>

          <Flex
            direction="column"
            gap="2"
            align="start"
            style={{ width: "fit-content", maxWidth: "100%" }}
          >
            {items.map((b) => (
              <Link asChild key={b.url} underline="always">
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    width: "fit-content",
                    maxWidth: "100%",
                    textDecoration: "inherit",
                  }}
                >
                  <Flex
                    align="center"
                    gap="3"
                    px="2"
                    py="1"
                    className="rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                    style={{ width: "fit-content", maxWidth: "100%" }}
                  >
                    <Box
                      width="5"
                      height="5"
                      className="grid place-items-center overflow-hidden rounded-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={faviconUrlFor(b.url)}
                        alt=""
                        width={18}
                        height={18}
                        loading="lazy"
                        decoding="async"
                        style={{ display: "block" }}
                      />
                    </Box>

                    <Flex align="center" gap="2" style={{ minWidth: 0 }}>
                      {b.title}

                      {b.description ? (
                        <Text className="truncate" color="gray">
                          {b.description}
                        </Text>
                      ) : null}
                    </Flex>
                  </Flex>
                </a>
              </Link>
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
