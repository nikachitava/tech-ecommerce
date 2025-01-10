import { useGetProductQueries } from "@/api/productQueries";
import ProductList from "@/components/custom/ProductList";

const DiscountsContainer = () => {
	const { data, isLoading, error } = useGetProductQueries();

	return <ProductList products={data} isLoading={isLoading} error={error} />;
};

export default DiscountsContainer;
