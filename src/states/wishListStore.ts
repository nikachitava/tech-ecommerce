import { Product } from '@/types/ProductType';
import { create } from 'zustand'

interface wishListState {
    wishCount: number,
    wishesList: any;
    addToWishList: (item: Product) => void;
    removeFromWishList: (id: number) => void;
}

export const useWishList = create<wishListState>(() => ({
    wishCount: 0,
    wishesList: [],
    addToWishList: (item) => {
        console.log(item)
    },
    removeFromWishList: () => {}
}))