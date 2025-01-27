import heart from "/icons/heart.svg";
import trash from "/icons/trash.svg";
import { IProductCardProps } from "@/types/IProductCardProps";
import { useWishList } from "@/states/wishListStore";
import { useCart } from "@/states/cartStore";
import { Star } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const ProductCard: React.FC<IProductCardProps> = ({
	id,
	title,
	discountPercent,
	price,
	heartIcon,
	trashIcon,
	thumbnail,
}) => {
	const { addToWishList, removeFromWishList } = useWishList((state) => state);
	const { addToCart } = useCart((state) => state);

	const isDiscountPrice = discountPercent
		? parseFloat((price - (price * discountPercent) / 100).toFixed(2))
		: price;

	return (
		<Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
			<div className="relative aspect-square">
				{/* Discount Badge */}
				{discountPercent && (
					<div className="absolute left-4 top-4 z-10">
						<span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
							-{discountPercent}%
						</span>
					</div>
				)}

				{/* Product Image */}
				<div className="relative h-full w-full bg-gray-100 p-6">
					<img
						src={thumbnail}
						alt={title}
						className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
					/>
				</div>

				{/* Wishlist/Remove Icons */}
				<div className="absolute right-4 top-4 z-10">
					{heartIcon && (
						<button
							className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
							onClick={(event) => {
								event.stopPropagation();
								event.preventDefault();
								addToWishList({
									id: id,
									name: title,
									thumbnail: thumbnail,
									price: isDiscountPrice,
								});
							}}
						>
							<img
								src={heart}
								alt="Add to wishlist"
								className="h-5 w-5"
							/>
						</button>
					)}
					{trashIcon && (
						<button
							className="rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110"
							onClick={(event) => {
								event.stopPropagation();
								event.preventDefault();
								removeFromWishList(id);
							}}
						>
							<img
								src={trash}
								alt="Remove from wishlist"
								className="h-5 w-5"
							/>
						</button>
					)}
				</div>

				{/* Add to Cart Overlay */}
				<div
					className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					onClick={(event) => {
						event.stopPropagation();
						event.preventDefault();
						addToCart({
							id,
							name: title,
							thumbnail,
							price: isDiscountPrice,
							quantity: 1,
							discount: isDiscountPrice,
						});
					}}
				>
					<Button
						variant="secondary"
						className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
					>
						Add to Cart
					</Button>
				</div>
			</div>

			{/* Product Info */}
			<div className="space-y-3 p-4">
				<h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium text-gray-900">
					{title}
				</h3>
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<span className="text-lg font-bold text-gray-900">
							${isDiscountPrice}
						</span>
						{discountPercent && (
							<span className="text-sm text-gray-500 line-through">
								${price}
							</span>
						)}
					</div>
					<div className="flex items-center">
						<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
						<span className="ml-1 text-sm text-gray-600">4.5</span>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default ProductCard;
