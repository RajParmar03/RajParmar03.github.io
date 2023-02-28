import { Box, color, Flex, Heading, Image, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { AppContext } from '../Context/ContextApi';
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";



const Contact = () => {
    const { contactRef } = React.useContext(AppContext);

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            px={{ base: '25px', md: '45px' }}
            h="350px"
            justifyContent="space-evenly"
            marginTop={'80px'}
            flexDirection="column"
            ref={contactRef}
            bg={colorMode == 'light' ? '#ffc200' : null}
        >
            <Heading 
                fontSize={'35px'} 
                fontFamily="Maven Pro" 
                paddingBottom={'20px'}
                m={"30px auto 30px auto"}
                w={"50%"}
                borderBottom={"1px solid gray"}
                textAlign={"center"}
            >
                Contact
            </Heading>
            <Flex gap="40px" justifyContent="center" marginBottom="30px">
                <Box>
                    <a href='mailto:rjbusiness03@gmail.com'>
                        <Image
                            src="/gmail.png"
                            boxSize="14"
                            cursor={'pointer'}
                        />
                    </a>
                    <Text fontWeight="bold" fontSize="lg">G-mail</Text>
                </Box>
                <Box>
                    <Image
                        src="/linkedin.png"
                        boxSize="14"
                        cursor={'pointer'}
                        onClick={() =>
                            window.open('https://www.linkedin.com/in/rajparmar03/')
                        }
                    />
                    <Text fontWeight="bold" fontSize="lg">LinkedIn</Text>
                </Box>
                <Box>
                    <Image
                        src="/githubDark.png"
                        boxSize="14"
                        cursor={'pointer'}
                        onClick={() => window.open('https://github.com/RajParmar03')}
                    />
                    <Text fontWeight="bold" fontSize="lg">GitHub</Text>
                </Box>
            </Flex>
            <Flex direction="column" gap="10px" justifyContent="center" alignItems="center">
                <Flex w="19%" justifyContent="center">
                    {/* <a href="tel : 9033920621"> */}
                        <BiPhoneCall size={30} />
                        <Text fontWeight="bold" fontSize="lg">9033920621</Text>
                    {/* </a> */}
                </Flex>
                <Flex w="19%" justifyContent="center">
                    {/* <a href='mailto:rjbusiness03@gmail.com'> */}
                        <AiOutlineMail size={30} />
                        <Text fontWeight="bold" fontSize="lg">rjbusiness03@gmail.com</Text>
                    {/* </a> */}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Contact;
