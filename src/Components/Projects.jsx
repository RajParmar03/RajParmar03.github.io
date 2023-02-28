import {
    Box,
    Button,
    ButtonGroup,
    Divider,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    Tooltip,
} from '@chakra-ui/react';
import React from 'react';

let obj = {
    HTML5: '/html.png',
    CSS3: '/css3.png',
    JavaScript: '/javascript.png',
    'React.js': '/react.png',
    'Chakra UI': '/chakra.png',
    'Node.js': '/node-js.png',
    'Express.js': '/express.png',
    Mongodb: '/mongodb.png',
    Redux: '/redux.png',
    TypeScript: '/typescript.png',
    Git: '/git.png',
    Github: '/github.png',
    'VS Code': '/vscode.png',
    Postman: '/postman.png',
};

const Projects = ({ img, title, desc, code, live, stack }) => {
    return (
        <>
        <Flex
            fontFamily="Maven Pro"
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
            boxSizing={'border-box'}
            px={{ base: '25px', md: '45px' }}
            gap="60px"
            marginBottom="30px"
        >
            <Image
                src={img}
                border={'1px solid #5b5b5b'}
                maxW="700px"
                w={{ base: '100%', md: '45%' }}
            />
            <Box
                textAlign={'left'}
                display="flex"
                flexDirection={'column'}
                gap="30px"
            >
                <Heading fontSize={'25px'} fontFamily="Maven Pro">
                    {title}
                </Heading>
                <Grid gap={'10px'} templateColumns="repeat(6, 40px)">
                    {stack.map((item) => (
                        <Tooltip label={item} key={item}>
                            <Image src={obj[item]} />
                        </Tooltip>
                    ))}
                </Grid>
                <Text fontSize={'18px'} color="#5b5b5b">
                    {desc}
                </Text>
                <ButtonGroup>
                    <Button
                        onClick={() => window.open(code, '_blank')}
                        color={'#fff'}
                        bg={'#474559'}
                        _hover={{ bg: '#ffc200' }}
                    >
                        Code
                    </Button>

                    <Button
                        onClick={() => window.open(live, '_blank')}
                        color={'#fff'}
                        bg={'#474559'}
                        _hover={{ bg: '#ffc200' }}
                    >
                        Live
                    </Button>
                </ButtonGroup>
            </Box>
        </Flex>
        <Divider />
        </>
        
    );
};

export default Projects;
