import { Flex, Card, Text, Badge,  } from '@radix-ui/themes';
import indexStyles from "../../styles/index.module.css";
import ReactPlayer from "react-player"



export default function LegacyMusic() {
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
        </>
    );
}