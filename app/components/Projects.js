'use client';

import { Flex, Heading, Card, Text, Badge, Button} from '@radix-ui/themes';
import { GitHubLogoIcon, LayoutIcon, FramerLogoIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import projectStyles from "../../styles/projects.module.css";
import Image from 'next/image';


export default function Projects() {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 600px)');
      const updateIsDesktop = () => {
        setIsDesktop(mediaQuery.matches);
      };
  
      updateIsDesktop(); // Set initial value
      mediaQuery.addListener(updateIsDesktop);
  
      return () => {
        mediaQuery.removeListener(updateIsDesktop);
      };
    }, []);

    return (
        <>
        <Heading mb="2" size="7">my projects</Heading>
        <Card>
          <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/tcatimsum.webp"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
              loading="lazy"
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
              <Flex>
                <a href="https://github.com/TUM-Dev/Campus-iOS" target="_blank" style={{ textDecoration: 'none', }}>
                  <Button variant="outline" color="purple" size="2"><GitHubLogoIcon width="12" height="12" />The TCA is Open Source</Button>
                </a>
              </Flex>

            </Flex>
          </Flex>
        </Card>
        <Card>
          <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/cctimsum.webp"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
              loading="lazy"
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">consultsummers.com</Heading>
              <Text>Built this onepager for my dads consultancy. Good opportunity to give figma x framer a try. Kinda cool but expensive and resposiveness is pain.</Text>
              <Flex gap="2">
                <Badge variant="surface" color='crimson'>Figma</Badge>
                <Badge variant="surface" color='gray'>Framer</Badge>
              </Flex>
              <Flex>
                <a href="https://final-workshops-886277.framer.app/" target="_blank" style={{ textDecoration: 'none', }}>
                  <Button variant="outline" color="gold" size="2"><FramerLogoIcon width="12" height="12" />Checkout the site here</Button>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Card>
        <Card>
          <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/mactimsum.webp"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
              loading="lazy"
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
              src="/timsumnet.webp"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
              loading="lazy"
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">timsum.net</Heading>
              <Text>The site ur on right now. It&apos;s an ongoing project and will be extended/redesigned in future. So stay tuned and check in every once in a while! <Text color="gray">(Image is a past version)</Text></Text>
              <Flex gap="2">
                <Badge variant="surface" color='gray'>Next.js</Badge>
                <Badge variant="surface" color='blue'>React</Badge>
                <Badge variant="surface" color='teal'>Supabase</Badge>
              </Flex>
              <Flex gap="2">
                <Badge variant="surface" color='gray'>Vercel</Badge>
                <Badge variant="surface" color='gray'>RadixUI</Badge>
              </Flex>
            </Flex>
          </Flex>
        </Card>
        <Card>
          <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/archtimsum2.webp"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
              loading="lazy"
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">Archillect App</Heading>
              <Text>Fun little project of mine. Really like archillect (check it out below). It&apos;s a bot collecting cool images from the web. Built an app to display these images in a widget on the iphone.</Text>
              <Flex gap="2">
                <Badge variant="surface" color='indigo'>XCode</Badge>
                <Badge variant="surface" color='tomato'>Swift/UI</Badge>
                <Badge variant="surface" color='orange'>Postman</Badge>
              </Flex>
              <Flex>
                <a href="https://archillect.com/" target="_blank" style={{ textDecoration: 'none', }}>
                  <Button variant="outline" color="gray" size="2"><LayoutIcon width="12" height="12" />Checkout Archillect</Button>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Card>
        <Card>
          <Flex gap="5" direction={isDesktop ? "row" : "column"} align={isDesktop ? undefined : "center"}>
            <img
              src="/miloufinal.webp"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: (isDesktop ? "40%" : "80%"),
                margin: '20px'
              }}
              loading="lazy"
            />
            <Flex direction="column" gap="3" justify="center" pr="5">
              <Heading size="6">Project Milou</Heading>
              <Text>Built the frontend of this stock analyzer tool. Together in a team we developed a detail screen showing a specific stock and it data visualized.</Text>
              <Flex gap="2">
                <Badge variant="surface" color='blue'>React</Badge>
                <Badge variant="surface" color='blue'>TypeScript</Badge>
                <Badge variant="surface" color='gray'>VSCode</Badge>
              </Flex>
              <Flex>
                <a href="https://github.com/ProjectMilou/frontend" target="_blank" style={{ textDecoration: 'none', }}>
                  <Button variant="outline" color="purple" size="2"><GitHubLogoIcon width="12" height="12" />Find it on GitHub</Button>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Card>
        </>
    );
}