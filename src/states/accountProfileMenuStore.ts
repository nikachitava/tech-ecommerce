import { Dispatch, SetStateAction } from 'react';
import {create } from 'zustand'

interface IAccountProfileMenuStore {
    activeItem: string;
    setActiveItem: Dispatch<SetStateAction<string>>;
}


export const useAccountProfileActiveItem = create<IAccountProfileMenuStore>((set) => ({
    activeItem: "My Profile",
    setActiveItem: (item) => set((state) => ({
        activeItem: typeof item === 'function' ? item(state.activeItem) : item
    }))
}))