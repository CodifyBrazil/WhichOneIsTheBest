import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'eZ1DaybOSJy_D16nsZRlAGcrzALknB9emwaosvKYvDU'
            }
    })

export const API = {
    
}