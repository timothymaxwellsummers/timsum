import { Flex, Button, Container, Section } from '@radix-ui/themes';
import { Github } from 'lucide-react';
import ThemeSelector from './ThemeSelector';

export default function Footer() {
  return (
    <Container size="3">
      <Section size="1">
        <Flex justify="between" align="center">
          <a 
            href="https://github.com/timothymaxwellsummers/timsum" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="outline" color="purple">
              <Github size={16} />
              Find this proj. on GitHub
            </Button>
          </a>
          <ThemeSelector />
        </Flex>
      </Section>
    </Container>
  );
} 