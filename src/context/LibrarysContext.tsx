'use client';

import React, { createContext, ReactNode, useState } from 'react';


export type TLibrary = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};



export type TLibrarysContext = {
  readLibrary: TLibrary[];
  setReadLibrary: React.Dispatch<React.SetStateAction<TLibrary[]>>;
  wishlibrary: TLibrary[];
  setWishLibrary: React.Dispatch<React.SetStateAction<TLibrary[]>>;
};


export const LibrarysContext = createContext<TLibrarysContext>({
  readLibrary: [],
  setReadLibrary: () => {},
  wishlibrary: [],
  setWishLibrary: () => {},
});



type TLibrarysProviderProps = {
  children: ReactNode;
};

const LibrarysProvider: React.FC<TLibrarysProviderProps> = ({ children }) => {

   
  const [readLibrary, setReadLibrary] = useState<TLibrary[]>([]);
  const [wishlibrary, setWishLibrary] = useState<TLibrary[]>([]);

  const sharedData: TLibrarysContext = {
    readLibrary,
    setReadLibrary,
    wishlibrary,
    setWishLibrary,
  };

  return (
    <LibrarysContext.Provider value={sharedData}>
      {children}
    </LibrarysContext.Provider>
  );
};

export default LibrarysProvider;