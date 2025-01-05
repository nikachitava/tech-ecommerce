import heart from "/icons/heart.svg";
import eye from "/icons/eye.svg";
import { IProductCardProps } from "@/types/IProductCardProps";

const ProductCard: React.FC<IProductCardProps> = ({
	title,
	discountPercentage,
	price,
	thumbnail,
}) => {
	return (
		<div className="min-w-[270px] shadow-lg cursor-pointer rounded">
			<div className="relative h-[250px] z-20 flex justify-between bg-secondary px-3 py-9">
				<div>
					<span className="font-poppins z-10 font-medium text-sm bg-secondary2 py-1 px-3 text-text rounded">
						-{discountPercentage}%
					</span>
				</div>
				<img
					src={thumbnail}
					alt={thumbnail}
					className="py-2 absolute -z-10 size-52"
				/>
				<div>
					<img src={heart} alt="ss" />
					<img src={eye} alt="ss" />
				</div>
			</div>
			<div className="pt-4 space-y-2">
				<h4 className="font-poppins text-black font-medium">{title}</h4>
				<div className="flex items-center gap-4">
					<p className="text-secondary2 font-medium font-poppins">
						${price}
					</p>
					<p className="text-black font-medium font-poppins line-through opacity-50">
						$160
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
