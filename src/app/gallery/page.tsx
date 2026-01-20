"use client";

import {
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Skeleton,
  Grid,
  Box,
} from "@radix-ui/themes";
import NextLink from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryApiResponse = { images: string[] };

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/gallery");
        const data = (await res.json()) as GalleryApiResponse;
        if (!cancelled) {
          setImages(Array.isArray(data.images) ? data.images : []);
        }
      } catch {
        if (!cancelled) setImages([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Container size="3" px="4">
      <Flex
        direction="column"
        align="center"
        justify="center"
        py="8"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        <Heading as="h1" size="8" mb="4">
          Gallery
        </Heading>
        <Text size="4" color="gray" mb="6">
          As seen through my iPhone.
        </Text>

        <Grid columns="3" gap="1" width="100%" mb="6">
          {isLoading ? (
            Array.from({ length: 9 }).map((_, i) => (
              <Box key={i} style={{ aspectRatio: "3/4" }}>
                <Skeleton width="100%" height="100%" />
              </Box>
            ))
          ) : images.length === 0 ? (
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
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 320px"
                  className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
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
