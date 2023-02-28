import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { AppContext } from '../Context/ContextApi';

const About = () => {
    const { aboutRef } = React.useContext(AppContext);
    return (
        <Flex
            px={{ base: '25px', md: '45px' }}
            paddingTop={'100px'}
            justifyContent={'space-between'}
            flexDirection={{ base: 'column', lg: 'row' }}
            gap="60px"
            ref={aboutRef}
        >
            <Image
                src="/profilepic_for_portfolio.png"
                borderRadius={'50%'}
                boxSize="250"
                border={'2px solid #5b5b5b'}
            ></Image>
            <Box
                textAlign={'left'}
                gap="15px"
                display={'flex'}
                flexDirection={'column'}
            >
                <Heading
                    fontSize={'35px'}
                    fontFamily="Maven Pro"
                    paddingBottom={'20px'}
                    m={"30px auto 30px auto"}
                    w={"50%"}
                    textAlign={"center"}
                    borderBottom={"1px solid gray"}
                >
                    About
                </Heading>
                <Text fontSize={'18px'} color={'#5b5b5b'} lineHeight="1.5">
                    Hi 👋, my name is RAJ PARMAR. I am a 25 year old
                    energetic and enthusiastic web developer. Currently,
                    learning full stack web development from Masai School.
                    <br />
                    Always open to learn new technologies and keen to connect
                    with like minded people. Activities I am involved in are reading and listning books and also have interest in trading.
                </Text>
            </Box>

        </Flex>
    );
};

export default About;
