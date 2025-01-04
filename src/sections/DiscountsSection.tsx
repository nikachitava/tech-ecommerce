import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/custom/Header";
import { useTranslation } from "react-i18next";
import { Product } from "@/types/ProductType";

const DiscountsSection = () => {
	const { t } = useTranslation();
	const [products, setProducts] = useState<Product[] | null>([]);

	const fetchProducts = async () => {
		try {
			const response = await axios.get("https://dummyjson.com/products");
			setProducts(response.data.products);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<section className="space-y-16">
			<Header
				title={t("Todays")}
				header={t("FlashDiscount")}
				hasTimer={false}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10">
				{products &&
					products.map((product) => (
						<div key={product.id} className="bg-red-700">
							<h1>{product.brand}</h1>

							<img src={product.images[0]} alt="sd" />
						</div>
					))}
			</div>
		</section>
	);
};

export default DiscountsSection;
