'use client';

import { Flex, Heading, Container, AspectRatio, Blockquote } from '@radix-ui/themes';
import indexStyles from "../../styles/index.module.css";


export default function Quotes() {
    return (
        <Container size="2">
            <Flex direction="column" gap="4">
                <Heading mb="2" size="7">quotes, i've collected 💭</Heading>
                
                    <AspectRatio ratio={50 / 9}>
                    <img
                        src="/quotestitle.png"
                        alt="A house in a forest"
                        style={{
                            objectFit: 'cover',
                            width: '80%',
                            height: '100%',
                            borderRadius: 'var(--radius-2)',
                        }}
                    />
                </AspectRatio>
                

                <Blockquote color="gray" size="5" highContrast="true">
                    A comparison is a thief of joy
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Hate is poison that kills the vessel it sits in
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Happiness = Reality - Expectations
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Things only hurt when theres some truth to it
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Find people that don’t need work to be around
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    The goal is not to run a marathon the goal is to become a runner
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Good artists copy, great artists steal!
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Mann wusste den sinn des Lebens als mann nichts wusste
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Denken hilft, mehr bringt wenig
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Under promise and over deliver
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Know something about everything and everything about something
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    If i always did what i was qualified to do i'd be pushing a broom some where
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    The definition of a gentleman is to make people in an uncomfortable position comfortable
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Ur the average of the 5 people u most associate with
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    Anxiety is a symptom of self disunity
                </Blockquote>
                <Blockquote color="gray" size="5" highContrast="true">
                    The last thing you want to do on a relaxing day is stare in to your phone
                </Blockquote>
            </Flex>
        </Container>
    );
}