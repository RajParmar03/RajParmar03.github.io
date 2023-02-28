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
                textAlign="center"
                px={{ base: '25px', md: '45px' }}
                ref={projectRef}
                m={"auto auto 50px auto"}
                w={"50%"}
                borderBottom={"1px solid gray"}
            >
                Projects
            </Heading>
            <Projects
                img="/bharatCartSS.png"
                title="Bharat-Cart.com"
                desc='About
                Bharat Cart is the website on which users can purchase the product like clothing, footwear , electronic-items, and also some stationary products. And this website also gives accessibility to sell your own products.'
                code="https://github.com/RajParmar03/Bharat_Cart"
                live="https://bharat-cart.netlify.app/"
                stack={['React.js', 'Chakra UI', 'Redux', "Node.js", "Mongodb", 'Express.js']}
            />
            <br />
            <Projects
                img="/relianceSS.png"
                title="Reliance Digital.com Clone"
                desc="It is an E-commerce website to buy Electronics Online at India's Best Online Electronic Shopping Store, Reliance Digital. Shop laptops, tvs, mobiles, cameras, home appliances etc from top ...."
                code="https://github.com/RajParmar03/Reliance_digital_clone"
                live="https://delightful-twilight-10e5bd.netlify.app/"
                stack={['React.js', 'Chakra UI', 'Redux']}
            />
            <br />
            <Projects
                img="/shiphora.png"
                title="Shiphora.com Clone"
                desc='Shiphora is a very famous fitness website on the internet,
                 that can help people to plan their daily workout and also manage their diet plan.
                 The companys stated mission is to "help bring creative projects to life".'
                code="https://github.com/RajParmar03/nondescript-question-6337"
                live="https://thunderous-haupia-f3c38d.netlify.app/"
                stack={['HTML5', 'CSS3', 'JavaScript', "React.js", "Chakra UI"]}
            />
            <br />
            <Projects
                img="/Jefit.png"
                title="Jefit.com Clone"
                desc='Jefit is a very famous fitness website on the internet,
                 that can help people to plan their daily workout and also manage their diet plan.
                 The companys stated mission is to "help bring creative projects to life".'
                code="https://github.com/RajParmar03/aquatic-discussion-8005"
                live="https://unit3-cw18-jefit-clone.netlify.app/"
                stack={['HTML5', 'CSS3', 'JavaScript']}
            />``
            <Contact />
        </div>
    );
}

export default App;
