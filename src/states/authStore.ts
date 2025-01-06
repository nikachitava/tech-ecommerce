import { doSignInWithGoogle } from '@/firebase/auth';
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
    loginWithGoogle: () => void;
}

export const useAuth = create<authStoreTypes>((set)=> ({
    isAuth: false,
    currentUser: null,
    loginWithGoogle: async () => {
        try {
            const user = await doSignInWithGoogle();
            set({ currentUser: user, isAuth: true });
        } catch (error) {
            throw error
        }
    }

}))