import { CartProductType } from "@/types/CartProductType";
import { create } from "zustand";


interface CartState {
    cartCount: number;
    cartList: CartProductType[];
    addToCart: (product: CartProductType) => void;
    removeFromCart: (id: string) => void;
    moveAllToCart: (products: CartProductType[]) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>((set) => ({
    cartCount: 0,
    cartList: [],
    addToCart: (product) =>
        set((state) => {
            const exists = state.cartList.some((item) => item.id === product.id);
            if (exists) return state;

            const updatedCartList = [...state.cartList, product];
            localStorage.setItem("Cart", JSON.stringify(updatedCartList));

            return {
                cartList: updatedCartList,
                cartCount: updatedCartList.length,
            };
        }),

    removeFromCart: (id) =>
        set((state) => {
            const updatedCartList = state.cartList.filter((item) => item.id !== id);
            localStorage.setItem("Cart", JSON.stringify(updatedCartList));

            return {
                cartList: updatedCartList,
                cartCount: updatedCartList.length,
            };
        }),

    moveAllToCart: (products) =>
        set((state) => {
            const newItems = products.filter(
                (product) => !state.cartList.some((item) => item.id === product.id)
            );
            const updatedCartList = [...state.cartList, ...newItems];
            localStorage.setItem("Cart", JSON.stringify(updatedCartList));

            return {
                cartList: updatedCartList,
                cartCount: updatedCartList.length,
            };
        }),

    clearCart: () => {
        set(() => {
            localStorage.removeItem("Cart");
            return {
                cartList: [],
                cartCount: 0,
            };
        })
        
    },
}));
