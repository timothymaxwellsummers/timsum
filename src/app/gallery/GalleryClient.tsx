"use client";

import {
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Grid,
  Box,
  Skeleton,
} from "@radix-ui/themes";
import NextLink from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";

type GalleryClientProps = {
  images: string[];
};

export function GalleryClient({ images }: GalleryClientProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  }, []);

  return (
    <Container size="3" px="1">
      <Flex
        direction="column"
        align="center"
        justify="center"
        py="8"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <Heading as="h1" size="8" mb="1">
          Gallery
        </Heading>
        <Text as="p" size="4" color="gray" mb="5">
          As seen through my iPhone.
        </Text>

        <Grid columns="3" gap="1" width="100%" mb="6">
          {images.length === 0 ? (
            <Box style={{ gridColumn: "1 / -1" }} p="4">
              <Text size="2" color="gray">
                No images found in{" "}
                <code className="font-mono">public/gallery</code>.
              </Text>
            </Box>
          ) : (
            images.map((src, i) => (
              <Box
                key={src}
                className="group relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                {!loadedImages.has(src) && (
                  <Box position="absolute" inset="0">
                    <Skeleton width="100%" height="100%" style={{ borderRadius: 0 }} />
                  </Box>
                )}
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 320px"
                  className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                  onLoad={() => handleImageLoad(src)}
                />
              </Box>
            ))
          )}
        </Grid>
        <Link asChild>
          <NextLink href="/">
            <Text size="3" weight="medium">
              ← Back to Home
            </Text>
          </NextLink>
        </Link>
      </Flex>
    </Container>
  );
}

