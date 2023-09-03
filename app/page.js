import { Flex, Text, Button, Heading, Container} from '@radix-ui/themes';
import { LinkedInLogoIcon, FileTextIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Gallery from './components/GalleryComponent';
import Projects from './components/Projects';


export default function Home() {
  return (
    <Container size="2">
      <Flex direction="column" gap="4">
        <Heading mb="2" size="7">hey, i&apos;m tim 👋</Heading>
        <Text>I like to built digital stuff. From websites and apps to 3D stuff. I finished an economics focused cs study program @TUM and am currently enrolled in a media focused cs master @LMU. At the same time I work at a small web dev agency in Munich. Trying to grow and learn more every day!</Text>
        <Flex gap="3" align="left">
          <a href="https://www.linkedin.com/in/timothymaxwellsummers/" target="_blank" style={{ textDecoration: 'none', }}>
            <Button variant="soft"><LinkedInLogoIcon width="16" height="16" />LinkedIn</Button>
          </a>
          <Link href='./cvTimsum.pdf' target="_blank" style={{ textDecoration: 'none', }}>
            <Button variant="soft"><FileTextIcon width="16" height="16" />My CV</Button>
          </Link>
        </Flex>
        <Gallery/>
        <Projects/>
      </Flex>
    </Container>
  );
}