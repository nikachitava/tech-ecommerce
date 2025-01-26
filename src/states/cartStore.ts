import { CartProductType } from "@/types/CartProductType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
    cartCount: number;
    sumPrice: string;
    shippingPrice: string;
    totalPrice: string;
    cartList: CartProductType[];
    addToCart: (product: CartProductType) => void;
    removeFromCart: (id: string) => void;
    moveAllToCart: (products: CartProductType[]) => void;
    clearCart: () => void;
    updateQuantity: (productId: string, quantity: number) => void;
    updateLocalStorage: (cartList: CartProductType[]) => { cartList: CartProductType[]; cartCount: number };
    calculateTotalPrice: () => { sumPrice: string, shippingPrice: string, totalPrice: string };
}

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            cartCount: 0,
            cartList: [],
            sumPrice: "0.00",
            shippingPrice: "0.00",
            totalPrice: "0.00",

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

                    const { cartList, cartCount } = get().updateLocalStorage(updatedCartList);
                    const { sumPrice, shippingPrice, totalPrice } = get().calculateTotalPrice();

                    return { cartList, cartCount, sumPrice, shippingPrice, totalPrice };
                }),

            removeFromCart: (id) =>
                set((state) => {
                    const updatedCartList = state.cartList.filter((item) => item.id !== id);
                    const { cartList, cartCount } = get().updateLocalStorage(updatedCartList);
                    const { sumPrice, shippingPrice, totalPrice } = get().calculateTotalPrice();

                    return { cartList, cartCount, sumPrice, shippingPrice, totalPrice };
                }),

            moveAllToCart: (products) =>
                set((state) => {
                    const updatedCartList = [
                        ...state.cartList,
                        ...products
                            .filter((product) => !state.cartList.some((item) => item.id === product.id))
                            .map((p) => ({ ...p, quantity: 1 })),
                    ];

                    const { cartList, cartCount } = get().updateLocalStorage(updatedCartList);
                    const { sumPrice, shippingPrice, totalPrice } = get().calculateTotalPrice();

                    return { cartList, cartCount, sumPrice, shippingPrice, totalPrice };
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

                    const { cartList, cartCount } = get().updateLocalStorage(updatedCartList);
                    const { sumPrice, shippingPrice, totalPrice } = get().calculateTotalPrice();

                    return { cartList, cartCount, sumPrice, shippingPrice, totalPrice };
                }),

            clearCart: () =>
                set(() => {
                    localStorage.removeItem("Cart");
                    return { cartList: [], cartCount: 0, sumPrice: "0.00", shippingPrice: "0.00", totalPrice: "0.00" };
                }),

            calculateTotalPrice: () => {
                const cartList = get().cartList;
                const sumPrice = cartList.reduce((sum, item) => {
                    const priceAfterDiscount = item.discount
                        ? item.price - (item.price * item.discount / 100)
                        : item.price;
                    return sum + (priceAfterDiscount * (item.quantity || 1));
                }, 0).toFixed(2); // Format to 2 decimal places

                const shippingPrice = (cartList.length > 0 ? 10 : 0).toFixed(2); // Example shipping price
                const totalPrice = (parseFloat(sumPrice) + parseFloat(shippingPrice)).toFixed(2);

                return { sumPrice, shippingPrice, totalPrice };
            }
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
