import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            'Authorization': import.meta.env.SECRET_KEY
            }
    })

export const API = {
    getPhotos: (id?: number) => {
        let idNUmber = id ? id : '';
        return axiosInstance.get('/photos?per_page=50');
    }
}