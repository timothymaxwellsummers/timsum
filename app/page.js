'use client';

import { Flex, Text, Button, Heading, Container, AspectRatio, Section, Card, Badge } from '@radix-ui/themes';
import { GitHubLogoIcon, LayoutIcon } from '@radix-ui/react-icons';
import { LinkedInLogoIcon, FileTextIcon } from '@radix-ui/react-icons';
import indexStyles from "../styles/index.module.css";
import { useMediaQuery } from 'react-responsive'


export default function Home() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 600px)'
  })
  return (
    <Container size="2">
      <Flex direction="column" gap="4">
        <Heading mb="2" size="7">hey, i'm tim 👋</Heading>
        <Text>I like to built digital stuff. From websites and apps to 3D stuff. I finished an economics focused cs study program @TUM and am currently enrolled in a media focused cs master @LMU. At the same time I work at a small web dev agency in Munich. Trying to grow and learn more every day!</Text>
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
        <Card>
          <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/tcatimsum.png"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">TUM Campus App</Heading>
              <Text>During my bachelor thesis i redesigned this app and added some functionality. This app is used by hundrets of students and provides information on grades, lectures and general uni content.</Text>
              <Flex gap="2">
                <Badge variant="surface" color='indigo'>XCode</Badge>
                <Badge variant="surface" color='tomato'>Swift/UI</Badge>
                <Badge variant="surface" color='crimson'>Figma</Badge>
                <Badge variant="surface" color='orange'>Postman</Badge>
              </Flex>
              <Flex><Button variant="outline" color="purple" size="2"><GitHubLogoIcon width="12" height="12" />The TCA is Open Source</Button></Flex>

            </Flex>
          </Flex>
        </Card>
        <Card>
          <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/mactimsum.png"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">Mailchampion</Heading>
              <Text>Together in a team of students we built this app for our client. The requirements were to make it fast and easy to create and design emails + templates on iOS.</Text>
              <Flex gap="2">
                <Badge variant="surface" color='indigo'>XCode</Badge>
                <Badge variant="surface" color='tomato'>Swift/UI</Badge>
                <Badge variant="surface" color='crimson'>Figma</Badge>
              </Flex>
            </Flex>
          </Flex>
        </Card>
        <Card>
        <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/archtimsum2.png"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">Archillect App</Heading>
              <Text>Fun little project of mine. Really like archillect (check it out below). It's a bot collecting cool images from the web. Built an app to display these images in a widget on the iphone.</Text>
              <Flex gap="2">
                <Badge variant="surface" color='indigo'>XCode</Badge>
                <Badge variant="surface" color='tomato'>Swift/UI</Badge>
                <Badge variant="surface" color='orange'>Postman</Badge>
              </Flex>
              <Flex><Button variant="outline" color="gray" size="2"><LayoutIcon width="12" height="12" />Checkout Archillect</Button></Flex>
            </Flex>
          </Flex>
        </Card>
        <Card>
        <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/miloufinal.png"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">Project Milou</Heading>
              <Text>Built the frontend of this stock analyzer tool. Together in a team we developed a detail screen showing a specific stock and it data visualized.</Text>
              <Flex gap="2">
                <Badge variant="surface" color='blue'>React</Badge>
                <Badge variant="surface" color='blue'>TypeScript</Badge>
                <Badge variant="surface" color='gray'>VSCode</Badge>
              </Flex>
              <Flex><Button variant="outline" color="purple" size="2"><GitHubLogoIcon width="12" height="12" />Find it on GitHub</Button></Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}