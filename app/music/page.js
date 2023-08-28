'use client';

import { Flex, Heading, Container, Text, Card } from '@radix-ui/themes';
import ReactPlayer from "react-player"
import indexStyles from "../../styles/index.module.css";


export default function Music() {
    return (
        <Container size="2">
            <Flex direction="column" gap="4">
                <Heading mb="2" size="7">my tunes 📻</Heading>
                <Text>I listen to a lot of music. Across the board really but favourite genres are r&b, soul, electronic, hiphop and in general bangers. So here's a small selection of soundcloud stuff i like.</Text>
                <Flex direction="column" align="center" justify="center" gap="5" pt="7">
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/sodwee/only-you'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/raptru/unreleased-christian-dior'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/sirenenl/it-g-hot-in-mi-bumber-edit-pack-teaser'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/overandoutuk/rwb-test-aim-free020'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/djkorekaranojinjizaihai-music/flow-2000-3d1t'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/9clacks/kodak-black-honest-freestyle'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/livefromearth/alcatraz-amore-cok-1'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/user-829532714/soulchef-write-this-down-x-dead-wrong-biggie-smalls'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                <div className={indexStyles.wrapper}>
                    <Card>
                        <div className={indexStyles.playerwrapper}>
                            <ReactPlayer
                                className={indexStyles.reactplayer}
                                url='https://soundcloud.com/kaymhmd8/frank-sinatra-and-nancy-sinatra-something-stupid'
                                width='125%'
                                height='100%'
                            />
                        </div>
                    </Card>
                </div>
                </Flex>
            </Flex>
        </Container>
    );
}