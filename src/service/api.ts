import axios from "axios";
import { ContextType, InterativsPosts } from "../types/types";

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
            'Authorization': import.meta.env.VITE_SECRET_KEY
            }
    })

export const API = {
    getAllImages: async (id?: number): Promise<ContextType[]> => {
        let idNumber = id ? `/${id}` : '';
        const {data} = await axiosInstance.get(`/photos${idNumber}?per_page=30`);
        return data
    }
}

export const API_INTERNAL = {
    postInterativsPosts: ({ url }: InterativsPosts) => {

    }
}