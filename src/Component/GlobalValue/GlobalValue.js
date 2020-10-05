import React, { createContext, useState } from 'react';

 export const GlobalVlaue =createContext();

const GlobalValueProvider = (props) => {
        
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <GlobalVlaue.Provider value={[loggedInUser, setLoggedInUser]}>
            {props.children}
        </GlobalVlaue.Provider>
    );
};

export default GlobalValueProvider;