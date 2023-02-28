import { Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <Flex
            paddingTop={'100px'}
            px={{ base: '25px', md: '45px' }}
            flexDirection="column"
            alignItems="center"
            gap="80px"
        >
           <Heading 
                fontSize={'35px'} 
                fontFamily="Maven Pro" 
                paddingBottom={'20px'}
                m={"30px auto 30px auto"}
                w={"50%"}
                borderBottom={"1px solid gray"}
            >
                Github Statistics
            </Heading>
            <GitHubCalendar
                username="RajParmar03"
                year={new Date().getFullYear()}
            />

            <Flex gap={'15px'} flexDirection={{ base: 'column', lg: 'row' }}>
                <Image src="https://github-readme-stats.vercel.app/api/top-langs?username=RajParmar03&show_icons=true&locale=en&layout=compact"></Image>
                <Image src="https://github-readme-stats.vercel.app/api?username=RajParmar03&show_icons=true&locale=en"></Image>
            </Flex>
        </Flex>
    );
};

export default Github;
