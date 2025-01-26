import { CartProductType } from "@/types/CartProductType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
    cartCount: number;
    cartList: CartProductType[];
    addToCart: (product: CartProductType) => void;
    removeFromCart: (id: string) => void;
    moveAllToCart: (products: CartProductType[]) => void;
    clearCart: () => void;
    updateQuantity: (productId: string, quantity: number) => void;
    updateLocalStorage: (cartList: CartProductType[]) => { cartList: CartProductType[]; cartCount: number };
}

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            cartCount: 0,
            cartList: [],

            updateLocalStorage: (cartList: CartProductType[]) => {
                localStorage.setItem("Cart", JSON.stringify(cartList));
                const totalQuantity = cartList.reduce((sum, item) => sum + (item.quantity || 1), 0);
                return { cartList, cartCount: totalQuantity };
            },

            addToCart: (product) =>
                set((state) => {
                    const existingProductIndex = state.cartList.findIndex(item => item.id === product.id);

                    const updatedCartList = [...state.cartList];
                    if (existingProductIndex > -1) {
                        updatedCartList[existingProductIndex] = {
                            ...updatedCartList[existingProductIndex],
                            quantity: (updatedCartList[existingProductIndex].quantity || 0) + 1,
                        };
                    } else {
                        updatedCartList.push({ ...product, quantity: 1 });
                    }

                    return get().updateLocalStorage(updatedCartList);
                }),

            removeFromCart: (id) =>
                set((state) => {
                    const updatedCartList = state.cartList.filter((item) => item.id !== id);
                    return get().updateLocalStorage(updatedCartList);
                }),

            moveAllToCart: (products) =>
                set((state) => {
                    const updatedCartList = [
                        ...state.cartList,
                        ...products
                            .filter((product) => !state.cartList.some((item) => item.id === product.id))
                            .map((p) => ({ ...p, quantity: 1 })),
                    ];
                    return get().updateLocalStorage(updatedCartList);
                }),

            updateQuantity: (productId, quantity) =>
                set((state) => {
                    const updatedCartList = [...state.cartList];
                    const productIndex = updatedCartList.findIndex(item => item.id === productId);

                    if (productIndex === -1) return state;

                    updatedCartList[productIndex] = {
                        ...updatedCartList[productIndex],
                        quantity: Math.max(1, quantity),
                    };

                    return get().updateLocalStorage(updatedCartList);
                }),

            clearCart: () =>
                set(() => {
                    localStorage.removeItem("Cart");
                    return { cartList: [], cartCount: 0 };
                }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
