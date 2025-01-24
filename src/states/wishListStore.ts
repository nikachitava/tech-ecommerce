import { CartProductType } from "@/types/CartProductType";
import { create } from "zustand";

interface WishListState {
	wishCount: number;
	wishList: CartProductType[];
	addToWishList: (product: CartProductType) => void;
	removeFromWishList: (id: string) => void;
	clearWishList: () => void;
}

export const useWishList = create<WishListState>((set) => ({
	wishCount: 0,
	wishList: [],
	addToWishList: (product) =>
		set((state) => {
			const exists = state.wishList.some((item) => item.id === product.id);
			const updatedWishList = exists
				? state.wishList.filter((item) => item.id !== product.id)
				: [...state.wishList, product];

			localStorage.setItem("wishList", JSON.stringify(updatedWishList));
			return { wishList: updatedWishList, wishCount: updatedWishList.length };
		}),
	removeFromWishList: (id) =>
		set((state) => {
			const updatedWishList = state.wishList.filter((item) => item.id !== id);

			localStorage.setItem("wishList", JSON.stringify(updatedWishList));
			return { wishList: updatedWishList, wishCount: updatedWishList.length };
		}),
	clearWishList: () =>
		set(() => {
			localStorage.removeItem("wishList");
			return { wishList: [], wishCount: 0 };
		}),
}));

