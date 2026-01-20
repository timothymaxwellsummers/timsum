import { Box, Flex, Link, Text } from "@radix-ui/themes";

export type BookmarkItem = {
  title: string;
  description?: string;
  url: string;
};

export function getHostname(url: string) {
  try {
    const { hostname } = new URL(url);
    return hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function faviconUrlFor(url: string) {
  const domain = getHostname(url);
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
}

type BookmarkLinkProps = {
  bookmark: BookmarkItem;
};

export function BookmarkLink({ bookmark }: BookmarkLinkProps) {
  return (
    <Link asChild underline="always">
      <a
        href={bookmark.url}
        target="_blank"
        rel="noreferrer"
        style={{ display: "inline-flex", width: "fit-content", maxWidth: "100%" }}
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
              src={faviconUrlFor(bookmark.url)}
              alt=""
              width={18}
              height={18}
              loading="lazy"
              decoding="async"
              style={{ display: "block" }}
            />
          </Box>

          <Flex align="center" gap="2" style={{ minWidth: 0 }}>
            {bookmark.title}
            {bookmark.description && (
              <Text className="truncate" style={{ color: "var(--gray-11)" }}>
                {bookmark.description}
              </Text>
            )}
          </Flex>
        </Flex>
      </a>
    </Link>
  );
}

