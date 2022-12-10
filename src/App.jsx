import { Heading } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { AppContext } from './Context/ContextApi';

function App() {
    const { projectRef } = React.useContext(AppContext);

    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Github />
            <Heading
                fontSize={'35px'}
                fontFamily="Maven Pro"
                paddingTop="100px"
                paddingBottom={'20px'}
                textAlign="left"
                px={{ base: '25px', md: '45px' }}
                ref={projectRef}
            >
                Projects
            </Heading>
            <Projects
                img="/kickstarter.png"
                title="kickstarter.com Clone"
                desc='Kickstarter is an American public benefit corporation based
            in Brooklyn, New York, that maintains a global crowdfunding
            platform focused on creativity. The companys stated mission
            is to "help bring creative projects to life".'
                code="https://github.com/Aman9723/brawny-plough-6910"
                live="https://the-great-aman9723-site.netlify.app/"
                stack={['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Chakra UI']}
            />
            <Contact />
        </div>
    );
}

export default App;
