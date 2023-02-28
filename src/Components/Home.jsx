import React from 'react';
import { Flex, VStack, Image, Text, Heading, Button } from '@chakra-ui/react';
import { GrDocumentText } from 'react-icons/gr';
import { AppContext } from '../Context/ContextApi';


const identity = [
    'RAJ PARMAR',
    'MERN Stack Developer',
    'Tech Enthusiast',
    'Problem Solver',
];

const Home = () => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        setInterval(() => {
            setCount((count) => {
                if (count === 3) return 0;
                else return count + 1;
            });
        }, 2000);
    }, []);

    const { homeRef } = React.useContext(AppContext);

    return (
        <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            paddingTop="80px"
            justifyContent={'space-between'}
            boxSizing={'border-box'}
            fontFamily={'Maven Pro'}
            px={{ base: '25px', md: '45px' }}
            gap="60px"
            ref={homeRef}
        >
            <VStack alignItems={'flex-start'} py="20px" gap={'15px'}>
                <Text
                    fontSize={'14px'}
                    fontWeight="bold"
                    color={'#5b5b5b'}
                    textAlign="left"
                >
                    Welcome to my portfolio website!
                </Text>
                <Heading
                    fontSize="35px"
                    textAlign={'left'}
                    fontWeight="bold"
                    fontFamily="Maven Pro"
                >
                    Hello, I'm{' '}
                    <span
                        style={{
                            color: '#ffc200',
                            fontSize: '30px',
                        }}
                    >
                        {identity[count]}
                    </span>
                </Heading>
                <Text
                    fontSize={'18px'}
                    color={'#5b5b5b'}
                    lineHeight={'1.5'}
                    fontWeight={'300'}
                    textAlign="left"
                >
                    “Once a new technology rolls over you, if you're not part of
                    the steamroller, you're part of the road.” - Stewart Brand
                </Text>
                <a onClick={() =>
                    window.open(
                        `https://drive.google.com/file/d/1Ck_asKSAER4b7pXswbSAVZI6z4o0Y7l4/view?usp=sharing`
                    )
                }
                    href="/fw20_0266-RAJ-PARMAR-RESUME.pdf"
                    download
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        zIndex={'-1'}
                        bg={'#eee'}
                        color="#5b5b5b"
                        _hover={{ colorScheme: '#ffc200' }}
                    >
                        <GrDocumentText />
                        &nbsp; Download Resume
                    </Button>
                </a>
            </VStack>
            <Image
                src="/homeImage.png"
                w={{ base: '300px', sm: '500px' }}
                h={{ base: '150px', sm: '250px' }}
            ></Image>
        </Flex>
    );
};

export default Home;
