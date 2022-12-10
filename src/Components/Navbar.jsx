import React from 'react';
import styles from './css/Navbar.module.css';
import {
    Box,
    Divider,
    Flex,
    Heading,
    IconButton,
    Spacer,
    useColorMode,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { AppContext } from '../Context/ContextApi';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { colorMode, toggleColorMode } = useColorMode();

    const { homeRef, aboutRef, skillRef, projectRef, contactRef } =
        React.useContext(AppContext);

    const [elm, setElm] = React.useState('home');

    return (
        <>
            <Flex
                alignItems="center"
                px={{ base: '20px', md: '40px' }}
                py="10px"
                w="100%"
                pos="sticky"
                top="0px"
                bgColor={colorMode === 'light' ? 'white' : '#1a202c'}
                borderBottom="1px solid lightgray"
                color={colorMode === 'light' ? 'rgba(0,0,0,.9)' : 'white'}
            >
                <Box p="2">
                    <Heading
                        fontSize="20px"
                        fontWeight="bold"
                        fontFamily="Maven Pro"
                    >
                        RAJ PARMAR
                    </Heading>
                </Box>
                <Spacer />
                <IconButton
                    size={'md'}
                    icon={isOpen ? <GrClose /> : <GiHamburgerMenu />}
                    onClick={isOpen ? onClose : onOpen}
                    display={{ base: 'flex', md: 'none' }}
                    alignItems="center"
                    justifyContent="center"
                    bg="transparent"
                ></IconButton>
                <Box
                    display={{ base: 'none', md: 'flex' }}
                    gap="50px"
                    color={colorMode === 'light' ? '#00000080' : 'white'}
                >
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'home' ? '#ffc200' : null}
                        onClick={() => {
                            homeRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('home');
                        }}
                    >
                        Home
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'about' ? '#ffc200' : null}
                        onClick={() => {
                            aboutRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('about');
                        }}
                    >
                        About
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'skill' ? '#ffc200' : null}
                        onClick={() => {
                            skillRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('skill');
                        }}
                    >
                        Skills
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'project' ? '#ffc200' : null}
                        onClick={() => {
                            projectRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('project');
                        }}
                    >
                        Projects
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        onClick={() => {
                            contactRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('contact');
                        }}
                    >
                        Contact
                    </Heading>
                    <Heading
                        onClick={toggleColorMode}
                        bg="transparent"
                        size="md"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        {colorMode === 'light' ? <MdDarkMode /> : <BsSun />}
                    </Heading>
                </Box>
            </Flex>

            {isOpen ? (
                <VStack
                    pb={4}
                    display={{ base: 'flex', md: 'none' }}
                    gap="10px"
                    color={colorMode === 'light' ? '#00000080' : 'white'}
                    pos="fixed"
                    w="100%"
                    pt="10px"
                    className={styles.responsive}
                    bgColor={colorMode === 'light' ? 'white' : '#1a202c'}
                >
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'home' ? '#ffc200' : null}
                        onClick={() => {
                            homeRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('home');
                        }}
                    >
                        Home
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'about' ? '#ffc200' : null}
                        onClick={() => {
                            aboutRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('about');
                        }}
                    >
                        About
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'skill' ? '#ffc200' : null}
                        onClick={() => {
                            skillRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('skill');
                        }}
                    >
                        Skills
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        color={elm === 'project' ? '#ffc200' : null}
                        onClick={() => {
                            projectRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('project');
                        }}
                    >
                        Projects
                    </Heading>
                    <Heading
                        size="sm"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                        onClick={() => {
                            contactRef.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                            setElm('contact');
                        }}
                    >
                        Contact
                    </Heading>
                    <Heading
                        onClick={toggleColorMode}
                        bg="transparent"
                        size="md"
                        className={styles.sections}
                        fontFamily="Maven Pro"
                        fontWeight="bold"
                    >
                        {colorMode === 'light' ? <MdDarkMode /> : <BsSun />}
                    </Heading>
                    <Divider />
                </VStack>
            ) : null}
        </>
    );
};

export default Navbar;
