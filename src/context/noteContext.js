import { createContext, useContext } from 'react';

export const NoteContextState = createContext();
export const NoteContextDispatch = createContext();

export const useGlobalState = () => useContext(NoteContextState);
export const useGlobalDispatch = () => useContext(NoteContextDispatch);
