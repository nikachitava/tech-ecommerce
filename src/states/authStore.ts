import { useAxios } from "@/hooks/useAxios";
import { UserType } from "@/types/UserType";
import { AxiosError, AxiosResponse } from "axios";
import { create } from "zustand";

useAxios.defaults.withCredentials = true;

interface AuthError extends Error {
    code?: string;
    statusCode?: number;
    message: string;
  }

interface authStoreTypes {
	isAuth: boolean;
	currentUser: UserType | null;
    isLoading: boolean;
	signUp: (data: {
		name: string;
		lastname: string;
		email: string;
		password: string;
	}) => Promise<AxiosResponse<any, any>>;
	signIn: (data: {email: string, password: string}) => Promise<void>;
	logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

export const useAuth = create<authStoreTypes>((set) => ({
	isAuth: false,
	currentUser: null,
    isLoading: true,
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
                currentUser: response.data.user,
            });

        } catch (error: any) {
            if (error.response.status === 401) {
				const errorType = error.response.data.errorType;

				if (errorType === "INVALID_EMAIL") {
					throw new Error(errorType);
				} else if (errorType === "INVALID_PASSWORD") {
					throw new Error(errorType);
				}
			}
        }
	},
	logout: async () => {
		try {
            await useAxios.post("/users/logout");
            set({ isAuth: false, currentUser: null });
        } catch (error) {
            console.error("Logout error:", error);
            set({ isAuth: false, currentUser: null });
        }
	},
    checkAuth: async () => {
        try {
            set({ isLoading: true });
            const response = await useAxios.get("/users/me");
            set({
                isAuth: true,
                currentUser: response.data.user,
                isLoading: false
            });
        } catch (error) {
            set({ isAuth: false, currentUser: null, isLoading: false });
        }
    }
}));

