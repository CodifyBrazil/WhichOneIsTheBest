import axios from "axios";
import { ContextType, InterativsPosts } from "../types/types";

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            'Authorization': import.meta.env.VITE_SECRET_KEY
            }
    })

export const API = {
    getAllImages: async (page?: number): Promise<ContextType[]> => {
        let idNumber = page ? `&page=${page}` : '';
        const {data} = await axiosInstance.get(`/photos?per_page=30${idNumber}`);
        return data
    }
}

export const API_INTERNAL = {
    postInterativsPosts: ({ url }: InterativsPosts) => {

    }
}