import { useAxios } from "@/hooks/useAxios";
import { UserType } from "@/types/UserType";
import { AxiosError, AxiosResponse } from "axios";
import { create } from "zustand";

interface AuthError extends Error {
    code?: string;
    statusCode?: number;
    message: string;
  }

interface authStoreTypes {
	isAuth: boolean;
	currentUser: UserType | null;
	signUp: (data: {
		name: string;
		lastname: string;
		email: string;
		password: string;
	}) => Promise<AxiosResponse<any, any>>;
	signIn: (data: {email: string, password: string}) => Promise<AxiosResponse<any, any>>;
	logout: () => Promise<void>;
}

export const useAuth = create<authStoreTypes>((set) => ({
	isAuth: false,
	currentUser: null,
	signUp: async (data) => {
		try {
			const response = await useAxios.post("/users/singup", data);
			return response;
		} catch (error) {
			if (error instanceof AxiosError) {
                const authError: AuthError = new Error(
                  error.response?.data?.message || "Failed to sign up"
                );
                authError.code = error.code;
                authError.statusCode = error.response?.status;
                throw authError;
              }
              throw new Error("An unexpected error occurred");
		}
	},
	signIn: async (data) => {
		try {
            const response = await useAxios.post("/users/auth", data);
            set({
				isAuth: true,
				// currentUser: response.data.user, // Assuming the response includes user data
			});
            return response;

        } catch (error) {
            if (error instanceof AxiosError) {
                const authError: AuthError = new Error(
                  error.response?.data?.message || "Failed to sign in"
                );
                authError.code = error.code;
                authError.statusCode = error.response?.status;
                throw authError;
              }
              throw new Error("An unexpected error occurred");
        }
	},
	logout: async () => {
		console.log("log out");
	},
}));