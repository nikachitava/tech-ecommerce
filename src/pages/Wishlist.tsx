import CustomButton from "@/components/custom/CustomButton";
import { useWishList } from "@/states/wishListStore";

const Wishlist = () => {
	const { wishCount } = useWishList((state) => state);

	return (
		<section className="container my-20 space-y-16">
			<div className="flex items-center justify-between">
				<h1 className="font-poppins font-medium text-xl">
					Wishlist ({wishCount})
				</h1>
				<CustomButton
					title="Move All To Bag"
					otherStyles="py-4 px-12 border border-[#000000] rounded"
					filled={false}
					onClick={() => {}}
				/>
			</div>
			<div>
				<h1>ssdadasdqw</h1>
			</div>
		</section>
	);
};

export default Wishlist;
