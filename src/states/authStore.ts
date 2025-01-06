import { doSignInWithGoogle, doSignOut } from '@/firebase/auth';
import { auth } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
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
    loginWithGoogle: () => Promise<void>;
    initializeAuth: () => () => void;
    logout: () => Promise<void>;
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
    },
    initializeAuth: () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          set({ currentUser: user, isAuth: !!user });
        });
        return unsubscribe;
    },
    logout: async () => {
        try {
            await doSignOut()
        } catch(error) {
            throw error
        }
    }

}))