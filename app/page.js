'use client';

import { Flex, Text, Button, Heading, Container, AspectRatio, Section, Card } from '@radix-ui/themes';
import { LinkedInLogoIcon, FileTextIcon } from '@radix-ui/react-icons';
import indexStyles from "../styles/index.module.css";


export default function Home() {
  return (
    <Container size="2">
      <Flex direction="column" gap="4">
        <Heading mb="2" size="7">hey, i'm tim 👋</Heading>
        <Text>I like to built digital stuff. rom websites and apps to 3D stuff. I finished an economics focused cs study program @TUM and am currently enrolled in a media focused cs study program @LMU. At the same time I work at a small web dev agency in Munich. Trying to grow and learn more every day!</Text>
        <Flex gap="3" align="left">
          <Button variant="soft"><LinkedInLogoIcon width="16" height="16" />LinkedIn</Button>
          <Button variant="soft"><FileTextIcon width="16" height="16" />My CV</Button>
        </Flex>
        <Section size="1">
        <div>
        <div className={indexStyles.width}>
        <Flex gap="3">
        <Container>
        <Flex direction="column" gap="3" align="center">
            <AspectRatio ratio={1 / 1}>
              <img
                src="/ball.png"
                alt="A house in a forest"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-2)',
                }}
              />
            </AspectRatio>
            <AspectRatio ratio={1 / 1}>
              <img
                src="/laptop.png"
                alt="A house in a forest"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-2)',
                }}
              />
            </AspectRatio>
          </Flex>
        </Container>
        <Container>
        <AspectRatio ratio={1 / 2.07}>
            <img
              src="/link.png"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-2)',
              }}
            />
          </AspectRatio>
        </Container>
        <Container>
        <AspectRatio ratio={1 / 2.07}>
            <img
              src="/port.png"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-2)',
              }}
            />
          </AspectRatio>
        </Container>  
        </Flex>
        </div>
        </div>
        </Section>
        <Heading mb="2" size="7">my projects</Heading>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Flex>
    </Container>
  );
}