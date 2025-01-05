import ExploreProductsList from "@/components/custom/ExploreProductsList";
import { Product } from "@/types/ProductType";
import axios from "axios";
import { useEffect, useState } from "react";

const ExploreProductsContainer = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(
				"https://dummyjson.com/products?limit=8"
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
	return <ExploreProductsList products={products} isLoading={isLoading} />;
};

export default ExploreProductsContainer;
