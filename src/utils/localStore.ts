import Cookies from 'universal-cookie';

const cookies = new Cookies;

type LocalStorage = {
    session?: string;
    valuePhoto?: number;
    pagePhoto?: number;
}

export const isLocalStorage = ({session, valuePhoto, pagePhoto}: LocalStorage) => {
    if (cookies.get('dataUser')) {
        const pagePhotoUser = pagePhoto?pagePhoto:1;
        cookies.set('dataUser',{session, valuePhoto, pagePhoto: pagePhotoUser});
        cookies.get('dataUser');
        return true;
    }
    else{
        const randomSessionUser = Math.floor(Math.random() * 9999999999999).toString();

        cookies.set('dataUser', {session: randomSessionUser,valuePhoto: 1, pagePhoto: 1});
        console.log(cookies.get('dataUser'));
        return false;      
    }
}


// salve page and numberPage in localStorage or coockie for after
// 8485103657129  