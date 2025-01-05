import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types/ProductType";
import BestSellingProductsList from "@/components/custom/BestSellingProductsList";

const BestSellingProductsContainer = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				"https://dummyjson.com/products?limit=4"
			);
			setProducts(response.data.products);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<BestSellingProductsList products={products} isLoading={isLoading} />
	);
};

export default BestSellingProductsContainer;
