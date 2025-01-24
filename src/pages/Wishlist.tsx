import CustomButton from "@/components/custom/CustomButton";
import WishlistsSection from "@/sections/wishlist/WishlistsSection";
import { useWishList } from "@/states/wishListStore";

const Wishlist = () => {
	const { wishCount, wishList, clearWishList } = useWishList(
		(state) => state
	);

	return (
		<section className="container my-20 space-y-16">
			<div className="flex items-center justify-between">
				<div className="space-y-4">
					<h1 className="font-poppins font-medium text-xl">
						Wishlist ({wishCount})
					</h1>
					<p
						className="text-lg font-poppins font-medium text-secondary2 cursor-pointer"
						onClick={clearWishList}
					>
						Clear wishlist
					</p>
				</div>
				<CustomButton
					title="Move All To Bag"
					otherStyles="py-4 px-12 border border-[#000000] rounded"
					filled={false}
					onClick={() => {}}
				/>
			</div>
			<div>
				<WishlistsSection products={wishList} />
			</div>
		</section>
	);
};

export default Wishlist;
