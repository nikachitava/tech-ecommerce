import BuyServices from "@/components/custom/BuyServices";
import CustomButton from "@/components/custom/CustomButton";
import Loader from "@/components/custom/Loader";
import ProductPreviewImages from "@/components/custom/ProductPreviewImages";
import { ApiError } from "@/types/ApiRequest";
import { Product } from "@/types/ProductType";

interface IProductPageSectionProps {
	data?: Product;
	isLoading: boolean;
	error?: ApiError | null;
}

const ProductPageSection = ({
	data,
	isLoading,
	error,
}: IProductPageSectionProps) => {
	if (isLoading) return <Loader />;
	if (error) return <h1>{error.message}</h1>;

	return (
		<section className="container my-20">
			{data ? (
				<div className="flex flex-col gap-20 lg:flex-row justify-between items-start">
					<ProductPreviewImages
						images={data.images}
						thumbnail={data.thumbnail}
					/>
					<div className="flex-1 break-words space-y-8 max-w-xl">
						<div className="space-y-4">
							<h1 className="font-poppins text-text2 text-3xl font-semibold tracking-tight">
								{data.name}
							</h1>
							{data.stock > 0 ? (
								<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
									In Stock
								</span>
							) : (
								<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700">
									Out of stock
								</span>
							)}
							<div className="flex items-baseline gap-3">
								<h4 className="font-poppins text-4xl font-bold">
									$
									{data.discountPercent
										? parseFloat(
												(
													data.price -
													(data.price *
														data.discountPercent) /
														100
												).toFixed(2)
										  )
										: data.price}
								</h4>
								{data.discountPercent && (
									<p className="text-gray-500 font-medium font-poppins line-through">
										${data.price}
									</p>
								)}
							</div>
						</div>
						<p className="font-poppins text-gray-600 text-base leading-relaxed">
							{data.description}
						</p>
						<div className="w-full h-px bg-gray-200" />
						<div className="flex justify-between">
							<CustomButton
								filled
								onClick={() => {}}
								title="Buy Now"
								otherStyles="flex items-center px-12 py-4 rounded-lg"
								textStyles="text-white font-poppins font-medium"
							/>
						</div>
						<BuyServices />
					</div>
				</div>
			) : (
				<div className="text-center py-12">
					<h1 className="text-xl font-medium text-gray-600">
						Something went wrong. Please try again.
					</h1>
				</div>
			)}
		</section>
	);
};

export default ProductPageSection;
