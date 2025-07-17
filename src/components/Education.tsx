import { Flex, Heading, Text, Box } from "@radix-ui/themes";

export function Education() {
  return (
    <Flex
      id="education"
      direction="column"
      align="center"
      justify="start"
      py="8"
      className="bg-gray-1"
      minHeight="100vh"
    >
      <Box maxWidth="800px" width="100%" px="4">
        <Heading as="h2" size="7" mb="5" align="center">
          Education
        </Heading>
        <Flex direction="column" gap="4">
          <Box>
            <Heading as="h3" size="5">
              University of Example
            </Heading>
            <Text as="p" color="gray">
              B.Sc. in Computer Science
            </Text>
            <Text as="p" color="gray">
              2018 - 2022
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="5">
              Another University
            </Heading>
            <Text as="p" color="gray">
              M.Sc. in Artificial Intelligence
            </Text>
            <Text as="p" color="gray">
              2022 - 2024
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
} 