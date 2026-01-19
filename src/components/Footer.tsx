import { Flex, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";

export function Footer() {
  return (
    <Flex direction="column" align="center" justify="center" py="8" mt="8">
      <Flex gap="4" wrap="wrap" mb="4">
        <Link asChild underline="always" color="gray">
          <NextLink href="/bookmarks">
            <Text size="3" weight="medium">Bookmarks</Text>
          </NextLink>
        </Link>
        <Link asChild underline="always" color="gray">
          <NextLink href="/gallery">
            <Text size="3" weight="medium">Gallery</Text>
          </NextLink>
        </Link>
        <Link asChild underline="always" color="gray">
          <NextLink href="/quotes">
            <Text size="3" weight="medium">Quotes</Text>
          </NextLink>
        </Link>
      </Flex>
      <Text color="gray" size="2">© 2026 Timothy Summers. All rights reserved.</Text>
    </Flex>
  );
}
