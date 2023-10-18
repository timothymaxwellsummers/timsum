import { Flex, Container, AspectRatio, Section } from '@radix-ui/themes';
import indexStyles from "../../styles/index.module.css";
import Image from 'next/image';
import port from '../../public/port.webp'


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
                                        src="/ball.webp"
                                        alt="Me holding a ball"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 'var(--radius-2)',
                                        }}
                                        loading="lazy"
                                    />
                                </AspectRatio>
                                <AspectRatio ratio={1 / 1}>
                                    <Image
                                        src="/laptop.webp"
                                        alt="My laptop"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 'var(--radius-2)',
                                        }}
                                        loading="lazy"
                                    />
                                </AspectRatio>
                            </Flex>
                        </Container>
                        <Container>
                            <AspectRatio ratio={1 / 2.07}>
                                <Image
                                    src="/link.webp"
                                    alt="LinkedIn event"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 'var(--radius-2)',
                                    }}
                                    loading="lazy"
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
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </Container>
                    </Flex>
                </div>
            </div>
        </Section>
    );
}