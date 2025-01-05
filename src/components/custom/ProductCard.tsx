import heart from "/icons/heart.svg";
import eye from "/icons/eye.svg";
import { IProductCardProps } from "@/types/IProductCardProps";

const ProductCard: React.FC<IProductCardProps> = ({
	title,
	discountPercentage,
	price,
	thumbnail,
	isDiscount,
}) => {
	const discountPrice = price - (price * discountPercentage) / 100;
	const roundedPrice = discountPrice.toFixed(2);
	const roundedFloatPrice = parseFloat(roundedPrice);

	return (
		<div className="min-w-[270px] shadow-lg cursor-pointer rounded group">
			<div className="relative h-[250px] flex  bg-secondary p-3">
				{isDiscount && (
					<div className="absolute">
						<span className="font-poppins z-10 font-medium text-sm bg-secondary2 py-1 px-3 text-text rounded">
							-{discountPercentage}%
						</span>
					</div>
				)}
				<img src={thumbnail} alt={thumbnail} className="" />
				<div className="absolute right-[12px] top-0">
					<img src={heart} alt="ss" />
					<img src={eye} alt="ss" />
				</div>
			</div>
			<div className="pt-4 space-y-2">
				<h4 className="font-poppins text-black font-medium">{title}</h4>
				<div className="flex items-center gap-4">
					<p className="text-secondary2 font-medium font-poppins">
						${isDiscount ? roundedFloatPrice : price}
					</p>
					{isDiscount && (
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
