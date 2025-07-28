import { Flex, Heading, Text, Box, Card, Badge } from "@radix-ui/themes";
import Image from "next/image";
import pwcIcon from "../../public/pwc.svg";
import mwIcon from "../../public/maibornwolff.png";
import lmuDevsIcon from "../../public/lmuDevs.svg";
import wowIcon from "../../public/wow.png";

export function Experience() {
  return (
    <Flex
      id="experience"
      direction="column"
      align="center"
      justify="start"
      py="8"
    >
        <Heading as="h2" size="7" mb="5" align="center">
          Experience
        </Heading>
        <Flex direction="column" gap="3">
        <Box>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>2024-2025</i>
              </Text>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={mwIcon}
                  alt="MaibornWolff"
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="4" weight="medium">
                    MaibornWolff
                  </Heading>
                    <Text as="p" color="gray">
                      Software Engineer
                    </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>2024-2025</i>
              </Text>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={lmuDevsIcon}
                  alt="LMU Developers"
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="4" weight="medium">
                    LMU Developers
                  </Heading>
                    <Text as="p" color="gray">
                      Founding Member
                    </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>2022-2024</i>
              </Text>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={wowIcon}
                  alt="Wowholic"
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="4" weight="medium">
                  Wowholic
                  </Heading>
                    <Text as="p" color="gray">
                      IT Project Manager
                    </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>2021-2022</i>
              </Text>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={pwcIcon}
                  alt="PricewaterhouseCoopers"
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="4" weight="medium">
                    PricewaterhouseCoopers
                  </Heading>
                    <Text as="p" color="gray">
                      IT Consultant
                    </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        </Flex>
    </Flex>
  );
}
