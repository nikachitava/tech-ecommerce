import BuyServices from "@/components/custom/BuyServices";
import CustomButton from "@/components/custom/CustomButton";
import Loader from "@/components/custom/Loader";
import QuantityCounter from "@/components/custom/QuantityCounter";
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
				<div className="flex flex-col  gap-20 lg:flex-row justify-between items-center">
					<div className="lg:w-[65%] grid grid-cols-4 gap-8">
						{!data?.images && (
							<div className="space-y-6 overflow-auto">
								{data?.images?.map((image, index) => (
									<div
										key={index}
										className={`flex items-center justify-center bg-secondary py-3 px-6 row-start-${[
											index + 1,
										]}`}
									>
										<img
											src={image}
											alt={image}
											loading="lazy"
											className="size-32"
										/>
									</div>
								))}
							</div>
						)}

						<div className="bg-secondary flex items-center justify-center col-span-3 row-span-4">
							<img
								src={data.thumbnail}
								alt={data.thumbnail}
								loading="lazy"
							/>
						</div>
					</div>
					<div className="lg:w-[30%]  break-words space-y-6">
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
							<QuantityCounter />
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
