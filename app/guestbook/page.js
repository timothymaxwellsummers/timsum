'use client';

import React from 'react'
import { Flex, Text, Heading, Container, Section, TextArea, TextField, Button } from '@radix-ui/themes';
import { supabase } from '../../lib/supabaseClient'
import { PaperPlaneIcon, PersonIcon } from '@radix-ui/react-icons';


export default function Guestbook() {

    const [guestbookData, setGuestbookData] = React.useState(null)
    const [message, setmessage] = React.useState(null)
    const messageInput = React.useRef()
    const [emptyMessageAlert, setemptyMessagealert] = React.useState(false)
    const [name, setname] = React.useState(null)
    const nameInput = React.useRef()
    const [emptyNameAlert, setemptyNamealert] = React.useState(false)

    const fetchguestbook = async () => {
        const { data, error } = await supabase.from('guestbookdata').select()
        if (data) {
            setGuestbookData(data)
            console.log(data)
        }
    }


    const uploaddata = async (e) => {
        let { data } = await supabase.from('guestbookdata').insert([
            {
                message: message,
                username: name,
                email: 'no mail',
            },
        ])
        fetchguestbook()
    }

    React.useEffect(() => {
        fetchguestbook()
    }, [])

    return (
        <Container size="2">
            <Flex direction="column" gap="4">
                <Heading mb="2" size="7">this is my guestbook 🤝</Heading>
                <Text>Say hi or just be nice haha. Feel free to write what ever u want just dont be mean!</Text>
                <Section size="1">
                    {guestbookData && guestbookData.map((data) =>
                        <Flex key={data.id} gap="3" pt="2"><Text color='gray'>{data.username}</Text><Text>{data.message}</Text></Flex>
                    )}
                </Section>
                <Flex justify="between" gap="4">
                    <TextField.Root 
                        placeholder="Choose a name..."
                        color={emptyNameAlert ? "red" : "gray"}
                        variant={emptyNameAlert ? "soft" : "surface"}
                        style={{ width: '100%' }}
                        onChange={(e) => setname(e.target.value)}
                        onFocus={() => setemptyNamealert(false)}
                        ref={nameInput}
                    >
                        <TextField.Slot>
                            <PersonIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                    
                    <Button
                        variant="soft"
                        onClick={() => {
                            !message ? setemptyMessagealert(true) : emptyMessageAlert && ''
                            !name ? setemptyNamealert(true) : emptyNameAlert && ''
                            message &&  name && uploaddata()
                            message &&  name && setmessage(null)
                            message &&  name && setname(null)
                            message &&  name && (messageInput.current.value = '')
                            message &&  name && (nameInput.current.value = '')
                        }}
                    >
                        <PaperPlaneIcon width="16" height="16" /> Send
                    </Button>
                </Flex>
                <TextArea
                    placeholder="Craft ur message..."
                    ref={messageInput}
                    onChange={(x) => {
                        setmessage(x.target.value)
                    }}
                    onFocus={() => setemptyMessagealert(false)}
                    color={emptyMessageAlert ? "red" : "gray"}
                    variant={emptyMessageAlert ? "soft" : "surface"}
                ></TextArea>
            </Flex>
        </Container>
    );
}