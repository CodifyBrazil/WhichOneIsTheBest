import axios from "axios";
import { ContextType, InterativsPosts } from "../types/types";

const axiosInstance_EXTERNAL = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            'Authorization': import.meta.env.VITE_SECRET_KEY
            }
    });

const axiosInstance_INTERNAL = axios.create({
    baseURL: 'http://localhost:3000'
})

export const API = {
    getAllImages: async ({username, page}: {username?: string, page?: number}): Promise<ContextType[]> => {
        let numberPage = page ? `&page=${page}` : '';
        let usernameProfile = username ? `/users/${username}` : '';
        const {data} = await axiosInstance_EXTERNAL.get(`${usernameProfile}/photos?per_page=30${numberPage}`);
        return data
    }
}

export const API_INTERNAL = {
    //salve data
    postInterativsPosts: ({ url }: InterativsPosts) => {

    }
}