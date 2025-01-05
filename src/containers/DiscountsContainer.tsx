import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types/ProductType";
import ProductList from "@/components/custom/ProductList";

const DiscountsContainer = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchProducts = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get("https://dummyjson.com/products");
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
	return <ProductList products={products} isLoading={isLoading} />;
};

export default DiscountsContainer;
