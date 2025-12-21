import { Container, Flex, Heading, Text, Link } from "@radix-ui/themes";
import NextLink from "next/link";
import { GalleryPreview } from "@/app/gallery/GalleryPreview";

export default function Gallery() {
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
          Gallery
        </Heading>
        <Text size="4" color="gray" mb="6">
          A showcase of my creative work and projects.
        </Text>

        <div className="w-full">
          <GalleryPreview />
        </div>

        <Link asChild>
          <NextLink href="/">
            <Text size="3" weight="medium">← Back to Home</Text>
          </NextLink>
        </Link>
      </Flex>
    </Container>
  );
} 