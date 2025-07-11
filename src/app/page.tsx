import { Container, Flex, Heading, Text, Link, Box } from "@radix-ui/themes";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container>
      <Flex direction="column" align="center" justify="center" style={{ minHeight: "calc(100vh - 120px)", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Heading as="h1" size="8" mb="4">
          Timothy Summers
        </Heading>
        <Text size="4" color="gray" mb="6">
          I like developing tools people love.
        </Text>
        <Flex gap="4" align="center">
          <Link asChild>
            <NextLink href="/bookmarks">
              <Text size="3" weight="medium">Bookmarks</Text>
            </NextLink>
          </Link>
          <Box>•</Box>
          <Link asChild>
            <NextLink href="/gallery">
              <Text size="3" weight="medium">Gallery</Text>
            </NextLink>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
}
