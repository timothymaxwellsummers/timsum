import { Container, Flex, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";

export function Footer() {
  return (
    <Container
      size="3"
      px={{ initial: "4", md: "6" }}
      py={{ initial: "7", sm: "8", md: "9" }}
    >
      <Flex direction="column" align="center" justify="center">
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
    </Container>
  );
}
