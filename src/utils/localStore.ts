import { cookieStorageManager } from "@chakra-ui/react";

type LocalStorage = {
    session: string;
    valuePhoto?: number;
    pagePhoto?: number;
}

export const isLocalStorage = ({session, valuePhoto, pagePhoto}: LocalStorage) => {
    if (sessionStorage.getItem('sessionUser')) {
        sessionStorage.setItem('sessionUser', session);
        return true;
    }
    else{
        const randomSessionUser = Math.floor(Math.random() * 9999999999999).toString();
        sessionStorage.setItem('sessionUser', randomSessionUser);
        const cookieUsers = {
            session: sessionStorage.getItem('sessionUser'),
            valuePhoto,
            pagePhoto,
        }
        setCookie

    }
}


// salve page and numberPage in localStorage or coockie for after