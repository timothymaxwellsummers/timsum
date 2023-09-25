import { Flex, Container, AspectRatio, Section } from '@radix-ui/themes';
import indexStyles from "../../styles/index.module.css";
import Image from 'next/image';
import port from '../../public/port.png'


export default function Gallery() {
    return (
        <Section size="1">
            <div>
                <div className={indexStyles.width}>
                    <Flex gap="3">
                        <Container>
                            <Flex direction="column" gap="3" align="center">
                                <AspectRatio ratio={1 / 1}>
                                    <Image
                                        src="/ball.png"
                                        alt="Me holding a ball"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 'var(--radius-2)',
                                        }}
                                    />
                                </AspectRatio>
                                <AspectRatio ratio={1 / 1}>
                                    <Image
                                        src="/laptop.png"
                                        alt="My laptop"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 'var(--radius-2)',
                                        }}
                                    />
                                </AspectRatio>
                            </Flex>
                        </Container>
                        <Container>
                            <AspectRatio ratio={1 / 2.07}>
                                <Image
                                    src="/link.png"
                                    alt="LinkedIn event"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 'var(--radius-2)',
                                    }}
                                />
                            </AspectRatio>
                        </Container>
                        <Container>
                            <AspectRatio ratio={1 / 2.07}>
                                <Image
                                    src={port}
                                    alt="Airport vibe"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 'var(--radius-2)',
                                    }}
                                />
                            </AspectRatio>
                        </Container>
                    </Flex>
                </div>
            </div>
        </Section>
    );
}