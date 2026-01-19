import { Flex, Heading, Text, Box, Card } from "@radix-ui/themes";
import Image from "next/image";
import pwcIcon from "../../public/pwc.svg";
import mwIcon from "../../public/maibornwolff.svg";
import lmuDevsIcon from "../../public/lmuDevs.svg";
import wowIcon from "../../public/wow.png";

type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  icon: string;
};

const experienceData: ExperienceEntry[] = [
  {
    period: "2024-2025",
    company: "MaibornWolff",
    role: "Software Engineer",
    icon: "mw",
  },
  {
    period: "2024-2025",
    company: "LMU Developers",
    role: "Founding Member",
    icon: "lmuDevs",
  },
  {
    period: "2022-2024",
    company: "Wowholic",
    role: "IT Project Manager",
    icon: "wow",
  },
  {
    period: "2021-2022",
    company: "PricewaterhouseCoopers",
    role: "IT Consultant",
    icon: "pwc",
  },
];

const iconMap: Record<string, typeof mwIcon> = {
  mw: mwIcon,
  lmuDevs: lmuDevsIcon,
  wow: wowIcon,
  pwc: pwcIcon,
};

export function Experience() {
  return (
    <Flex direction="column" align="center" justify="start" py="8">
      <Heading as="h2" size="7" mb="5" mt="8" align="center">
        Experience
      </Heading>
      <Flex direction="column" gap="3">
        {experienceData.map((entry) => (
          <Box key={`${entry.company}-${entry.period}`}>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>{entry.period}</i>
              </Text>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={iconMap[entry.icon]}
                  alt={entry.company}
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="4" weight="medium">
                    {entry.company}
                  </Heading>
                  <Text as="p" color="gray">
                    {entry.role}
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
