import { Flex, Heading, Text, Link, Box, Button } from "@radix-ui/themes";
import { ArrowDown } from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";
import profileImage from "../../public/timothyIcon.webp";

export function LaunchScreen() {
  return (
    <Flex direction="column" minHeight="100svh" width="100%">
      <Flex direction="column" align="center" justify="center" flexGrow="1">
        <Box>
          <div
            className="animate-[fade-in_1.5s_ease-in-out_0.8s_forwards]"
            style={{ opacity: 0 }}
          >
            <Image
              src={profileImage}
              alt="Timothy Summers"
              width={85}
              height={85}
              priority={true}
              loading="eager"
              className="mb-5"
            />
          </div>
          <div
            className="animate-[text-focus-in_0.8s_ease-in-out_forwards]"
            style={{ opacity: 0 }}
          >
            <Heading as="h1" size="8" mb="1">
              Timothy Summers
            </Heading>
          </div>
          <div
            className="animate-[text-focus-in_0.8s_ease-in-out_0.2s_forwards]"
            style={{ opacity: 0 }}
          >
            <Text as="p" size="4" color="gray" mb="5">
              I like developing tools people love.
            </Text>
          </div>
          <div
            className="animate-[fade-in_1.5s_ease-in-out_0.8s_forwards]"
            style={{ opacity: 0 }}
          >
            <Flex gap="2" mb="5" wrap="wrap">
              <div className="transition-transform duration-200 ease-in-out hover:scale-107 hover:rotate-2">
                <a
                  href="https://www.linkedin.com/in/timothymaxwellsummers/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="soft">LinkedIn</Button>
                </a>
              </div>
              <div className="transition-transform duration-200 ease-in-out hover:scale-107 hover:rotate-2">
                <a
                  href="mailto:me@timsum.net"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="soft">Email</Button>
                </a>
              </div>
              <div className="transition-transform duration-200 ease-in-out hover:scale-107 hover:rotate-2">
                <Link href="./cvTimsum.pdf" target="_blank" style={{ textDecoration: 'none', }}>
                  <Button variant="soft">CV</Button>
                </Link>
              </div>
              <div className="transition-transform duration-200 ease-in-out hover:scale-107 hover:rotate-2">
                <a
                  href="https://github.com/timothymaxwellsummers"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                > 
                  <Button variant="soft">GitHub</Button>
                </a>
              </div>
            </Flex>
          </div>
          <div
            className="animate-[fade-in_1.5s_ease-in-out_0.8s_forwards]"
            style={{ opacity: 0 }}
          >
            <Flex gap="4" wrap="wrap">
              <Link asChild underline="always" color="gray" size="4">
                <NextLink href="/bookmarks">
                  <Text size="3" weight="medium">
                    Bookmarks
                  </Text>
                </NextLink>
              </Link>
              <Link asChild underline="always" color="gray" size="4">
                <NextLink href="/gallery">
                  <Text size="3" weight="medium">
                    Gallery
                  </Text>
                </NextLink>
              </Link>
              <Link asChild underline="always" color="gray" size="4">
                <NextLink href="/quotes">
                  <Text size="3" weight="medium">
                    Quotes
                  </Text>
                </NextLink>
              </Link>
            </Flex>
          </div>
        </Box>
      </Flex>

      <div
        className="animate-[slide-up-and-fade-in_1.5s_ease-in-out_0.4s_forwards]"
        style={{ opacity: 0 }}
      >
        <Flex justify="center" p="8">
          <Link href="#quote-preview">
            <Button variant="classic" size="3">
              Explore <ArrowDown size={20} className="-m-1.5" />
            </Button>
          </Link>
        </Flex>
      </div>
    </Flex>
  );
}
