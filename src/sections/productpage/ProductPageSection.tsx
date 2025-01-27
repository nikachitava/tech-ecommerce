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
				<div className="flex flex-col gap-20 lg:flex-row justify-between items-center">
					<ProductPreviewImages
						images={data.images}
						thumbnail={data.thumbnail}
					/>
					<div className="break-words space-y-6">
						<div className="space-y-4">
							<h1 className="font-poppins text-text2 text-2xl font-semibold">
								{data.name}
							</h1>
							{data.stock > 0 ? (
								<span className="text-sm text-button1 font-poppins font-medium">
									In Stock
								</span>
							) : (
								<span className="text-sm text-button2 font-poppins font-medium">
									Out of stock
								</span>
							)}
							<div className="flex items-center gap-2">
								<h4 className="font-poppins text-secondary2 text-2xl texttex">
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
									<p className="text-black font-medium font-poppins line-through opacity-50">
										${data.price}
									</p>
								)}
							</div>
						</div>
						<p className="font-poppins text-text2 text-sm">
							{data.description}
						</p>
						<hr className="w-full h-1 bg-black" />
						<div className="flex  justify-between ">
							{/* <QuantityCounter /> */}
							<CustomButton
								filled
								onClick={() => {}}
								title="Buy Now"
								otherStyles="bg-secondary2 flex items-center px-12 py-3 rounded"
								textStyles="text-text font-poppins font-medium"
							/>
						</div>
						<BuyServices />
					</div>
				</div>
			) : (
				<h1>TRY AGAIN</h1>
			)}
		</section>
	);
};

export default ProductPageSection;
