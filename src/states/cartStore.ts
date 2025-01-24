import { create } from "zustand";

interface CartItem {
	id: string;
	quantity: number;
}

interface CartState {
	cartCount: number;
	cartList: CartItem[];
	addToCart: (id: string, quantity: number) => void;
	removeFromCart: (id: string) => void;
	moveAllToCart: (id: string[]) => void;
	clearCart: () => void;
}

export const useCart = create<CartState>((set) => ({
	cartCount: JSON.parse(localStorage.getItem("Cart") || "[]").reduce(
		(total: number, item: CartItem) => total + (item.quantity || 1),
		0
	),
	cartList: JSON.parse(localStorage.getItem("Cart") || "[]"),
	addToCart: (id, quantity = 1) =>
		set((state) => {
			const existingItem = state.cartList.find((item) => item.id === id);

			let updatedCartList;
			if (existingItem) {
				// If the item exists, update its quantity
				updatedCartList = state.cartList.map((item) =>
					item.id === id
						? { ...item, quantity: item.quantity + quantity }
						: item
				);
			} else {
				// Otherwise, add the new item
				updatedCartList = [...state.cartList, { id, quantity }];
			}

			const updatedCartCount = state.cartCount + quantity;

			// Save to localStorage
			localStorage.setItem("Cart", JSON.stringify(updatedCartList));

			return {
				cartList: updatedCartList,
				cartCount: updatedCartCount,
			};
		}),

	removeFromCart: (id) =>
		set((state) => {
			const existingItem = state.cartList.find((item) => item.id === id);

			if (!existingItem) return state;

			let updatedCartList;
			let updatedCartCount;

			if (existingItem.quantity > 1) {
				updatedCartList = state.cartList.map((item) =>
					item.id === id
						? { ...item, quantity: item.quantity - 1 }
						: item
				);
				updatedCartCount = state.cartCount - 1;
			} else {
				updatedCartList = state.cartList.filter(
					(item) => item.id !== id
				);
				updatedCartCount = state.cartCount - 1;
			}

			localStorage.setItem("Cart", JSON.stringify(updatedCartList));

			return {
				cartList: updatedCartList,
				cartCount: updatedCartCount,
			};
		}),

	moveAllToCart: (ids) =>
		set((state) => {
			const newItems = ids
				.filter((id) => !state.cartList.some((item) => item.id === id))
				.map((id) => ({ id, quantity: 1 }));

			const updatedCartList = [...state.cartList, ...newItems];
			const updatedCartCount = state.cartCount + newItems.length;

			localStorage.setItem("Cart", JSON.stringify(updatedCartList));

			return {
				cartList: updatedCartList,
				cartCount: updatedCartCount,
			};
		}),

	clearCart: () => {
		localStorage.removeItem("Cart");
		return {
			cartList: [],
			cartCount: 0,
		};
	},
}));
