import { Flex, Heading, Text, Box, Card, Badge } from "@radix-ui/themes";
import Image from "next/image";
import tumIcon from "../../public/tum.svg";
import cambridgeIcon from "../../public/cam.svg";
import lmuIcon from "../../public/lmu.svg";

type EducationEntry = {
  period: string;
  badge: string;
  institution: string;
  institutionShort?: string;
  field: string;
  icon: string;
};

const educationData: EducationEntry[] = [
  {
    period: "2025",
    badge: "Master Thesis",
    institution: "University of Cambridge",
    field: "Human-Computer Interaction",
    icon: "cambridge",
  },
  {
    period: "2023-2025",
    badge: "Master of Science",
    institution: "University of Munich",
    field: "Human-Computer Interaction",
    icon: "lmu",
  },
  {
    period: "2019-2023",
    badge: "Bachelor of Science",
    institution: "Technical University of Munich",
    institutionShort: "Technical Uni. of Munich",
    field: "Information Systems",
    icon: "tum",
  },
];

const iconMap: Record<string, typeof tumIcon> = {
  cambridge: cambridgeIcon,
  lmu: lmuIcon,
  tum: tumIcon,
};

export function Education() {
  return (
    <Flex direction="column" align="center" justify="start" py="8">
      <Heading as="h2" size="7" mb="5" mt="8" align="center">
        Education
      </Heading>
      <Flex direction="column" gap="3" mb="8">
        {educationData.map((entry) => (
          <Box key={entry.period}>
            <Flex gap="2" align="center" justify="between" mb="1" mx="2">
              <Text color="gray" size="3" weight="bold">
                <i>{entry.period}</i>
              </Text>
              <Badge color="gray" variant="soft">
                {entry.badge}
              </Badge>
            </Flex>
            <Card>
              <Flex gap="4" align="center" mx="1">
                <Image
                  src={iconMap[entry.icon]}
                  alt={entry.institution}
                  width={40}
                  height={40}
                />
                <Box>
                  <Heading as="h3" size="4" weight="medium" mr="2">
                    {entry.institutionShort ? (
                      <>
                        <span className="hidden sm:inline">{entry.institution}</span>
                        <span className="inline sm:hidden">{entry.institutionShort}</span>
                      </>
                    ) : (
                      entry.institution
                    )}
                  </Heading>
                  <Text as="p" color="gray">
                    {entry.field}
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
