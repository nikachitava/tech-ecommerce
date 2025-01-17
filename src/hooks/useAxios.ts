import { useAuth } from '@/states/authStore';
import axios from 'axios'

export const useAxios = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

useAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Clear auth state when token is invalid/expired
            useAuth.getState().logout();
        }
        return Promise.reject(error);
    }
);