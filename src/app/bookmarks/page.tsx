import bookmarks from "../../../public/bookmarks.json";
import { ArrowUpRight } from "lucide-react";
import { Box, Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";

type BookmarkItem = {
  title: string;
  url: string;
};

function getHostname(url: string) {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function faviconUrlFor(url: string) {
  const domain = getHostname(url);
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
}

export default function Bookmarks() {
  const items = bookmarks.bookmarks as BookmarkItem[];

  return (
    <Container>
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{
          minHeight: "calc(100vh - 120px)",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Heading as="h1" size="8" mb="4">
          Bookmarks
        </Heading>
        <Text size="4" color="gray" mb="6">
          My curated collection of useful resources.
        </Text>

        <Flex direction="column" gap="2" mx="2" maxWidth="750px" width="100%" mb="6">
          {items.map((b) => {
            const host = getHostname(b.url);
            return (
              <Link asChild key={b.url} underline="hover" color="gray">
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Flex
                    align="center"
                    justify="between"
                    gap="3"
                    px="3"
                    py="2"
                    className="rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    <Flex align="center" gap="3" style={{ minWidth: 0 }}>
                      <Box
                        width="5"
                        height="5"
                        className="grid place-items-center overflow-hidden rounded bg-black/10 dark:bg-white/10"
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
                      <Box style={{ minWidth: 0 }}>
                        <Text as="div" size="3" weight="medium" className="truncate">
                          {b.title}
                        </Text>
                        <Text as="div" size="1" color="gray" className="truncate">
                          {host}
                        </Text>
                      </Box>
                    </Flex>
                    <ArrowUpRight size={16} />
                  </Flex>
                </a>
              </Link>
            );
          })}
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