import { Box, Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react';
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
            alignItems={'center'}
            gap="20px"
            flexBasis="content"
            ref={skillRef}

        >
            <Heading 
                fontSize={'35px'} 
                fontFamily="Maven Pro" 
                paddingBottom={'20px'}
                m={"auto auto 30px auto"}
                w={"50%"}
                borderBottom={"1px solid gray"}
            >
                Skills
            </Heading>
            <Flex flexWrap="wrap" gap="50px">
                <Box label="HTML5" >
                    <Image src="/html.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">HTML5</Text>
                </Box>
                <Box label="CSS3">
                    <Image src="/css3.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">CSS3</Text>
                </Box>
                <Box label="JavaScript">
                    <Image src="/javascript.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">JavaScript</Text>
                </Box>
                <Box label="React.js">
                    <Image src="/react.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">React.js</Text>
                </Box>
                <Box label="Chakra UI">
                    <Image src="/chakra.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">Chakra UI</Text>
                </Box>
                <Box label="Node.js">
                    <Image src="/node-js.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">Node.js</Text>
                </Box>
                <Box label="Express.js">
                    <Image src="/express.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">Express.js</Text>
                </Box>
                <Box label="Mongodb">
                    <Image src="/mongodb.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">Mongodb</Text>
                </Box>
                <Box label="Redux">
                    <Image src="/redux.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">Redux</Text>
                </Box>
                <Box label="TypeScript">
                    <Image src="/typescript.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">TypeScript</Text>
                </Box>
            </Flex>
            <hr />
            <Heading 
                fontSize={'35px'} 
                fontFamily="Maven Pro" 
                paddingBottom={'20px'}
                m={"30px auto 30px auto"}
                w={"50%"}
                borderBottom={"1px solid gray"}
            >
                Tools
            </Heading>
            <Flex flexWrap="wrap" gap="50px">
                <Box label="Git">
                    <Image src="/git.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">Git</Text>
                </Box>
                <Box label="Github">
                    <Image src="/githubDark.png" boxSize="16" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">GitHub</Text>
                </Box>
                <Box label="VS Code">
                    <Image src="/vscode.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">VS Code</Text>
                </Box>
                <Box label="Postman">
                    <Image src="/postman.png" boxSize="14" _hover={{ boxSize: "65", cursor: "pointer" }} />
                    <Text fontWeight="bold" fontSize="lg">Postman</Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Skills;
