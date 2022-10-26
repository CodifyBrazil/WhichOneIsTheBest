import { createContext, ReactNode } from 'react';
import { ContextType } from '../types/types'
import { API } from '../service/api';

type Props = {
    getAllInfo: () => Promise<ContextType[]>
}

export const Context = createContext({} as Props);


const getAllInfo = async () => {
    const images: ContextType[] = await API.getAllImages();
    return images;
}

export const ContextProvider = ({children}: {children: ReactNode}) => {

    return (
        <Context.Provider value={{getAllInfo}}>
            {children}
        </Context.Provider>
    )
}