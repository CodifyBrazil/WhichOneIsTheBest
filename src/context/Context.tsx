import { createContext, ReactNode } from 'react';
import { ContextType } from '../types/types'
import { API } from '../service/api';

type Props = {
    getAllInfo: ({username, page}: {username?: string, page?: number}) => Promise<ContextType[]>
}

export const Context = createContext({} as Props);


const getAllInfo = async ({username, page}: {username?: string, page?: number}) => {
    const images: ContextType[] = await API.getAllImages({username, page});
    return images;
}

export const ContextProvider = ({children}: {children: ReactNode}) => {

    return (
        <Context.Provider value={{getAllInfo}}>
            {children}
        </Context.Provider>
    )
}