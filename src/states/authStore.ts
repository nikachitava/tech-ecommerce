import { create } from 'zustand'

interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

interface authStoreTypes {
    isAuth: boolean;
    currentUser: User | null,
    signUp: (name: string, lastname: string, emai: string, password: string) => Promise<void>;
    signIn: (emai: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const useAuth = create<authStoreTypes>(()=> ({
    isAuth: false,
    currentUser: null,
    signUp: async () => {
        console.log("sign up")
    },
    signIn: async () => {
        console.log("sign in")
    },
    logout: async () => {
        console.log("log out")
    }

}))