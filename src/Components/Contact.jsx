import { color, Flex, Heading, Image, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { AppContext } from '../Context/ContextApi';

const Contact = () => {
    const { contactRef } = React.useContext(AppContext);

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            px={{ base: '25px', md: '45px' }}
            h="200px"
            justifyContent="space-evenly"
            marginTop={'80px'}
            flexDirection="column"
            ref={contactRef}
            bg={colorMode == 'light' ? '#ffc200' : null}
        >
            <Heading
                fontSize={'35px'}
                fontFamily="Maven Pro"
                textAlign={'left'}
            >
                Contact
            </Heading>
            <Flex gap="40px" alignItems="center">
                <Image
                    src="/gmail.png"
                    boxSize="12"
                    cursor={'pointer'}
                    onClick={() => window.open('https://rjbusiness03@gmail.com')}
                />
                <Image
                    src="/linkedin.png"
                    boxSize="14"
                    cursor={'pointer'}
                    onClick={() =>
                        window.open('https://www.linkedin.com/in/rajparmar03/')
                    }
                />
                <Image
                    src="/githubDark.png"
                    boxSize="14"
                    cursor={'pointer'}
                    onClick={() => window.open('https://github.com/RajParmar03')}
                />
            </Flex>
        </Flex>
    );
};

export default Contact;
