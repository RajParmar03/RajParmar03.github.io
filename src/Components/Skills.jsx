import { Flex, Heading, Image, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { AppContext } from '../Context/ContextApi';

const Skills = () => {
    const { skillRef } = React.useContext(AppContext);

    return (
        <Flex
            fontFamily="Maven Pro"
            paddingTop={'100px'}
            px={{ base: '25px', md: '45px' }}
            flexDirection="column"
            alignItems={'flex-start'}
            gap="20px"
            flexBasis="content"
            ref={skillRef}
        >
            <Heading fontSize={'35px'} fontFamily="Maven Pro">
                Skills
            </Heading>
            <Flex flexWrap="wrap" gap="20px">
                <Tooltip label="HTML5">
                    <Image src="/html.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="CSS3">
                    <Image src="/css3.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="JavaScript">
                    <Image src="/javascript.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="React.js">
                    <Image src="/react.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Chakra UI">
                    <Image src="/chakra.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Node.js">
                    <Image src="/node-js.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Express.js">
                    <Image src="/express.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Mongodb">
                    <Image src="/mongodb.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Redux">
                    <Image src="/redux.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="TypeScript">
                    <Image src="/typescript.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Git">
                    <Image src="/git.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Github">
                    <Image src="/githubDark.png" boxSize="16" />
                </Tooltip>
                <Tooltip label="VS Code">
                    <Image src="/vscode.png" boxSize="14" />
                </Tooltip>
                <Tooltip label="Postman">
                    <Image src="/postman.png" boxSize="14" />
                </Tooltip>
            </Flex>
        </Flex>
    );
};

export default Skills;
