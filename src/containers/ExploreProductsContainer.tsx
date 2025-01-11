import { useGetNewestProducts } from "@/api/productQueries";
import ExploreProductsList from "@/components/custom/ExploreProductsList";

const ExploreProductsContainer = () => {
	const { data, isLoading, error } = useGetNewestProducts();

	return (
		<ExploreProductsList
			products={data}
			isLoading={isLoading}
			error={error}
		/>
	);
};

export default ExploreProductsContainer;
