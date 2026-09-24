'use client'

import React, { createContext, ReactNode, useState } from 'react';



export const LibrarysContext =createContext({});


 const LibrarysProvider = ({children}:{children:ReactNode}) => {
 
 const [readLibrary,setReadLibrary] = useState([]);
 const [wishlibrary, setWishLibrary] =useState([]);

 const sharedData = {
    readLibrary,
    setReadLibrary,
    wishlibrary, 
    setWishLibrary
 }
 
    return <LibrarysContext.Provider value ={sharedData}>{children}</LibrarysContext.Provider>
};

export default LibrarysProvider;