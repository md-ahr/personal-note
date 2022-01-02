import { createContext, useContext } from 'react';

export const initialState = {
    theme: 'dark',
    notes: [{
        id: '',
        note: ''
    }]
};

export const NoteContextState = createContext();
export const NoteContextDispatch = createContext();

export const useGlobalState = () => useContext(NoteContextState);
export const useGlobalDispatch = () => useContext(NoteContextDispatch);
