import { Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";

export default function Bookmarks() {
  return (
    <Container>
      <Flex direction="column" align="center" justify="center" style={{ minHeight: "calc(100vh - 120px)", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Heading as="h1" size="8" mb="4">
          Bookmarks
        </Heading>
        <Text size="4" color="gray" mb="6">
          My curated collection of useful resources.
        </Text>
        <Link asChild>
          <NextLink href="/">
            <Text size="3" weight="medium">← Back to Home</Text>
          </NextLink>
        </Link>
      </Flex>
    </Container>
  );
} 