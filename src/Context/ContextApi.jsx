import React from 'react';

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const homeRef = React.useRef();
    const aboutRef = React.useRef();
    const skillRef = React.useRef();
    const projectRef = React.useRef();
    const contactRef = React.useRef();
    return (
        <AppContext.Provider
            value={{ homeRef, aboutRef, skillRef, projectRef, contactRef }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
