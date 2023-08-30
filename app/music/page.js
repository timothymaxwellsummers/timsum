'use client';

import { Flex, Heading, Container, Text, Card, Badge, Tabs, AspectRatio, Blockquote } from '@radix-ui/themes';
import ReactPlayer from "react-player"
import indexStyles from "../../styles/index.module.css";
import dynamic from "next/dynamic"

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
})

export default function Music() {
    const isDesktop = MediaQuery({
        query: '(min-width: 600px)'
      })
    return (
        <Container size="2">
            <Flex direction="column" gap="4">
                <Heading mb="2" size="7">stuff i like... enjoy! 💫</Heading>
                <Text>This is a collection of quotes, music and videos i like. I might add more stuff lets see. Explore have fun and if u want give me a review in the guestbook ;). </Text>
                <Tabs.Root defaultValue="music">
                    <Tabs.List>
                        <Tabs.Trigger value="music">Music</Tabs.Trigger>
                        <Tabs.Trigger value="tube">YouTube</Tabs.Trigger>
                        <Tabs.Trigger value="quotes">Quotes</Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="music">
                        <Heading mb="2" size="6" mt="5">my tunes 📻</Heading>
                        <Text>I listen to a lot of music. Across the board really but favourite genres are r&b, soul, electronic, hiphop and in general bangers. So here's a small selection of soundcloud stuff i like.</Text>
                        <Flex direction="column" align="center" justify="center" gap="5" pt="7">
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Yeaah steve! 🎶💃 </Text>
                                        <Badge variant="surface" color='amber'>African</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/sodwee/only-you'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">If u still like Ye 🫠</Text>
                                        <Badge variant="surface" color='indigo'>HipHop</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/raptru/unreleased-christian-dior'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Yes I work and listen to this...  🪩</Text>
                                        <Badge variant="surface" color='crimson'>Dance</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/sirenenl/it-g-hot-in-mi-bumber-edit-pack-teaser'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">London baby 🏴󠁧󠁢󠁥󠁮󠁧󠁿</Text>
                                        <Badge variant="surface" color='blue'>Electric</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/overandoutuk/rwb-test-aim-free020'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Ya its a vibe 🔊</Text>
                                        <Badge variant="surface" color='blue'>Electric</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/djkorekaranojinjizaihai-music/flow-2000-3d1t'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Trust me Kodak Black is really good</Text>
                                        <Badge variant="surface" color='indigo'>HipHop</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/9clacks/kodak-black-honest-freestyle'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">🗣️🇩🇪</Text>
                                        <Badge variant="surface" color='blue'>Electric</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/livefromearth/alcatraz-amore-cok-1'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Oldschool 🗽</Text>
                                        <Badge variant="surface" color='indigo'>HipHop</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/user-829532714/soulchef-write-this-down-x-dead-wrong-biggie-smalls'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">For the loving heart 💘</Text>
                                        <Badge variant="surface" color='brown'>Vocal</Badge>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://soundcloud.com/kaymhmd8/frank-sinatra-and-nancy-sinatra-something-stupid'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                        </Flex>
                    </Tabs.Content>

                    <Tabs.Content value="tube">
                        <Heading mb="2" size="6" mt="5">some of my YouTube likes 📺</Heading>
                        <Text>Yeah right i like YouTube. A lot really. Check out these videos there are some funny gems and a couple of great conversations. Hope u find something u like.</Text>
                        <Flex direction="column" align="center" justify="center" gap="5" pt="7">
                        <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">I can relate Mr. Incredible 😳</Text>
                                        <Flex gap="3"><Badge variant="surface" color='orange'>Design</Badge><Badge variant="surface" color='gray'>2min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/jAaxVuz0uKk?si=NdWd8ZuBY4g1xuhY'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Vintage drizzy 🎙️</Text>
                                        <Flex gap="3"><Badge variant="surface" color='lime'>Culture</Badge><Badge variant="surface" color='gray'>1min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/mh6vHoyBs58?si=eU9dwponpOW_6gQU'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Crazyy</Text>
                                        <Flex gap="3"><Badge variant="surface" color='green'>Nature</Badge><Badge variant="surface" color='gray'>11sec</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/KeiMLB6BS-o?si=MCXVTFVsRPIu3wBA'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Ehm, No thank thank you! 🧑‍🍳</Text>
                                        <Flex gap="3"><Badge variant="surface" color='indigo'>Politics</Badge><Badge variant="surface" color='gray'>2min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/r5qZoT6bbJo?si=8VHgkBGTCUTjbPQ2'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Haha.. WoW! 😆</Text>
                                        <Flex gap="3"><Badge variant="surface" color='red'>Tech</Badge><Badge variant="surface" color='gray'>4min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/kOO31qFmi9A?si=Bv0EbO6sodmY-1mV'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Thats real fr!</Text>
                                        <Flex gap="3"><Badge variant="surface" color='lime'>Culture</Badge><Badge variant="surface" color='gray'>3:20min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/DSd8V-kb6Ro?si=xer8mxuEtIOdqOW_'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Rockstar from planet mars 😆</Text>
                                        <Flex gap="3"><Badge variant="surface" color='lime'>Culture</Badge><Badge variant="surface" color='gray'>4min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/VoJpiTh6vLA?si=oVJTBwuACb2vIOQE'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">This would still happen! 💀</Text>
                                        <Flex gap="3"><Badge variant="surface" color='orange'>Space</Badge><Badge variant="surface" color='gray'>2min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/kRlhlCWplqk?si=WQr3AWmOGC2_SChN'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Gotcha! Or no? haha</Text>
                                        <Flex gap="3"><Badge variant="blue" color='orange'>USA</Badge><Badge variant="surface" color='gray'>1min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/uFlPdwl5JHw?si=dCNc73H7jIhBwns1'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Space vids ➡️ Canada</Text>
                                        <Flex gap="3"><Badge variant="surface" color='orange'>Space</Badge><Badge variant="surface" color='gray'>3:10min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/3bCoGC532p8?si=GFDaaVQpAlGCOssW'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Legend ⛳️</Text>
                                        <Flex gap="3"><Badge variant="surface" color='yellow'>Sports</Badge><Badge variant="surface" color='gray'>2:20min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/WJEysanOT7w?si=B0q9YKNeWj9p7JiI'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">👀 👀 💀</Text>
                                        <Flex gap="3"><Badge variant="surface" color='green'>Nature</Badge><Badge variant="surface" color='gray'>1:20min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/1g9sneS2MF4?si=5ELLVbC5FoWNZWxI'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Okay I pull up! 😆</Text>
                                        <Flex gap="3"><Badge variant="surface" color='green'>Nature</Badge><Badge variant="surface" color='gray'>30sec</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/arUwVMtXm_U?si=YP9E7iJ2cWpbQtSI'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Fred Dibnah is a legend 🔨</Text>
                                        <Flex gap="3"><Badge variant="surface" color='brown'>History</Badge><Badge variant="surface" color='gray'>30min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/T00zEt1-3VA?si=QkTLdC3WctAiipyU'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Ehm 🥶 haha</Text>
                                        <Flex gap="3"><Badge variant="surface" color='green'>Nature</Badge><Badge variant="surface" color='gray'>1min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/qz2SeEzxMuE?si=mhrzmMplSt9o-u7D'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className={indexStyles.wrapper}>
                                <Card>
                                    <Flex pb="3" justify="between">
                                        <Text weight="medium" size="3">Omgggg 🥺</Text>
                                        <Flex gap="3"><Badge variant="surface" color='pink'>Cute</Badge><Badge variant="surface" color='gray'>2:40min</Badge></Flex>
                                    </Flex>
                                    <div className={indexStyles.playerwrapper}>
                                        <ReactPlayer
                                            className={indexStyles.reactplayer}
                                            url='https://www.youtube.com/embed/fHNx_3aCx6s?si=h9IpWB7ieNLcIy4M'
                                            width={isDesktop ? "125%" : "100%"}
                                            height='100%'
                                        />
                                    </div>
                                </Card>
                            </div>
                        </Flex>
                    </Tabs.Content>

                    <Tabs.Content value="quotes">
                        <Heading mb="2" size="6" mt="5">quotes, i've collected 💭</Heading>
                        <Flex direction="column" gap="4">
                        <Text mb="3">A few of them take some time to digest. Take that time, its worth it :)</Text>
                        <AspectRatio ratio={50 / 9}>
                            <img
                                src="/quotestitle.png"
                                alt="A house in a forest"
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 'var(--radius-2)',
                                }}
                            />
                        </AspectRatio>


                        <Blockquote color="gray" size="5" highContrast="true" mt="3">
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
                    </Tabs.Content>
                </Tabs.Root>
            </Flex>
        </Container>
    );
}