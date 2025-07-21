import { Flex, Heading, Text, Box, Card, Badge } from "@radix-ui/themes";
import Image from "next/image";
import tumIcon from "../../public/tum.svg";
import cambridgeIcon from "../../public/cam.svg";
import lmuIcon from "../../public/lmu.svg";

export function Education() {
  return (
    <Flex
      id="education"
      direction="column"
      align="center"
      justify="start"
      py="8"
      minHeight="100vh"
    >
        <Heading as="h2" size="7" mb="5" align="center">
          Education
        </Heading>
        <Flex direction="column" gap="3">
          <Box>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>2025</i>
              </Text>
              <Badge color="gray" variant="soft">
                Master Thesis
              </Badge>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={cambridgeIcon}
                  alt="University of Cambridge"
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="5" weight="medium">
                    University of Cambridge
                  </Heading>
                    <Text as="p" color="gray">
                      Human-Computer Interaction
                    </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>2023-2025</i>
              </Text>
              <Badge color="gray" variant="soft">
                Master of Science
              </Badge>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={lmuIcon}
                  alt="University of Munich"
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="5" weight="medium">
                    University of Munich
                  </Heading>
                    <Text as="p" color="gray">
                      Human-Computer Interaction
                    </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>2019-2023</i>
              </Text>
              <Badge color="gray" variant="soft">
                Bachelor of Science
              </Badge>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={tumIcon}
                  alt="Technical University of Munich"
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="5" weight="medium" mr="2">
                    <span className="hidden sm:inline">Technical University of Munich</span>
                    <span className="inline sm:hidden">Technical Uni. of Munich</span>
                  </Heading>
                    <Text as="p" color="gray">
                      Information Systems
                    </Text> 
                </Box>
              </Flex>
            </Card>
          </Box>
        </Flex>
    </Flex>
  );
}
