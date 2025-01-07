import CustomButton from "@/components/custom/CustomButton";
import QuantityCounter from "@/components/custom/QuantityCounter";
import { Product } from "@/types/ProductType";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<Product | null>(null);

	const fetchProduct = async () => {
		try {
			const response = await axios.get(
				`https://dummyjson.com/products/${id}`
			);
			setProduct(response.data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<section className="container my-20">
			{product ? (
				<div className="flex justify-between">
					<div className="w-[70%] bg-green-400  grid grid-cols-4 gap-8">
						<div className="space-y-6 overflow-auto">
							{product?.images.map((image, index) => (
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

						<div className="bg-secondary flex items-center justify-center col-span-3 row-span-4">
							<img
								src={product.thumbnail}
								alt={product.thumbnail}
								loading="lazy"
							/>
						</div>
					</div>
					<div className="w-[28%]  break-words space-y-6">
						<div className="space-y-4">
							<h1 className="font-poppins text-text2 text-2xl font-semibold">
								{product.title}
							</h1>
							{product.stock > 0 ? (
								<span className="text-sm text-button1 font-poppins font-medium">
									In Stock
								</span>
							) : (
								<span className="text-sm text-button2 font-poppins font-medium">
									Out of stock
								</span>
							)}
							<h4 className="font-poppins text-text2 text-2xl texttex">
								${product.price}
							</h4>
						</div>
						<p className="font-poppins text-text2 text-sm">
							{product.description}
						</p>
						<hr className="w-full h-1 bg-black" />
						<div className="flex  justify-between">
							<QuantityCounter />
							<CustomButton
								filled
								onClick={() => {}}
								title="Buy Now"
								otherStyles="bg-secondary2 flex items-center px-12 py-3 rounded"
								textStyles="text-text font-poppins font-medium"
							/>
						</div>
					</div>
				</div>
			) : (
				<h1>TRY AGAIN</h1>
			)}
		</section>
	);
};

export default ProductPage;
