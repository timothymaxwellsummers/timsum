import { Flex, Heading, Text, Link, Box, Button } from "@radix-ui/themes";
import { ArrowDown } from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";
import profileImage from "../../public/timothyIcon.webp";

export default function Home() {
  return (
    <Flex direction="column" minHeight="100vh" width="100%">
      <Flex direction="column" align="center" justify="center" flexGrow="1">
        <Box>
          <Image
            src={profileImage}
            alt="Timothy Summers"
            width={85}
            height={85}
            priority={true}
            loading="eager"
            className="mb-5"
          />
          <Heading as="h1" size="8" mb="1">
            Timothy Summers
          </Heading>
          <Text as="p" size="4" color="gray" mb="5">
            I like developing tools people love.
          </Text>
          <Flex gap="2" mb="5" wrap="wrap">
            <Button variant="soft">LinkedIn</Button>
            <Button variant="soft">Email</Button>
            <Button variant="soft">CV</Button>
            <Button variant="soft">GitHub</Button>
          </Flex>
          <Flex gap="4" wrap="wrap">
            <Link asChild underline="always" color="gray" size="4">
              <NextLink href="/bookmarks">
                <Text size="3" weight="medium">
                  Bookmarks
                </Text>
              </NextLink>
            </Link>
            <Link asChild underline="always" color="gray">
              <NextLink href="/gallery">
                <Text size="3" weight="medium">
                  Gallery
                </Text>
              </NextLink>
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Flex justify="center" p="8">
        <Button variant="classic" size="3">
          Find out more <ArrowDown size={20} className="-m-1.5" />
        </Button>
      </Flex>
    </Flex>
  );
}
