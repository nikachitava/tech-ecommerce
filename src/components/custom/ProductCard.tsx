import heart from "/icons/heart.svg";
import eye from "/icons/eye.svg";
import { IProductCardProps } from "@/types/IProductCardProps";
import { useWishList } from "@/states/wishListStore";

const ProductCard: React.FC<IProductCardProps> = ({
	id,
	title,
	discountPercent,
	price,
	thumbnail,
}) => {
	// const discountPrice = parseFloat((price - (price * discountPercent) / 100).toFixed(2))
	// const roundedPrice = discountPrice.toFixed(2);
	// const roundedFloatPrice = parseFloat(roundedPrice);

	const { addToWishList, wishList } = useWishList((state) => state);

	return (
		<div className="group min-w-[270px] shadow-lg cursor-pointer rounded group">
			<div className="relative h-[250px] flex  bg-secondary p-3">
				{discountPercent && (
					<div className="absolute">
						<span className="font-poppins z-10 font-medium text-sm bg-secondary2 py-1 px-3 text-text rounded">
							-{discountPercent}%
						</span>
					</div>
				)}
				<img src={thumbnail} alt={thumbnail} className="" />
				<div className="absolute right-[12px] top-0">
					<img
						src={heart}
						alt="ss"
						onClick={() => {
							addToWishList(id);
							console.log(wishList);
						}}
					/>
					<img src={eye} alt="ss" />
				</div>
				<div className="absolute bg-black bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
					<p className="font-poppins font-medium text-text text-center py-1">
						ADD CART
					</p>
				</div>
			</div>
			<div className="pt-4 space-y-2">
				<h4 className="font-poppins text-black font-medium">{title}</h4>
				<div className="flex items-center gap-4">
					<p className="text-secondary2 font-medium font-poppins">
						$
						{discountPercent
							? parseFloat(
									(
										price -
										(price * discountPercent) / 100
									).toFixed(2)
							  )
							: price}
					</p>
					{discountPercent && (
						<p className="text-black font-medium font-poppins line-through opacity-50">
							${price}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
