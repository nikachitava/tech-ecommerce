import { create } from "zustand";

interface wishListState {
	wishCount: number;
	wishList: any;
	addToWishList: (id: string) => void;
	removeFromWishList: (id: string) => void;
}

export const useWishList = create<wishListState>((set) => ({
	wishCount: JSON.parse(localStorage.getItem("wishList") || "[]").length,
	wishList: JSON.parse(localStorage.getItem("wishList") || "[]"),
	addToWishList: (id) =>
		set((state) => {
			const updatedWishList = state.wishList.includes(id)
				? state.wishList.filter((wishId: string) => wishId !== id)
				: [...state.wishList, id];

			localStorage.setItem("wishList", JSON.stringify(updatedWishList));
			return { wishList: updatedWishList, wishCount: updatedWishList.length };
		}),
	removeFromWishList: (id) =>
		set((state) => {
			const updatedWishList = state.wishList.filter(
				(wishId: string) => wishId !== id
			);

			localStorage.setItem("wishList", JSON.stringify(updatedWishList)); 
			return { wishList: updatedWishList, wishCount: updatedWishList.length };
		}),
}));
