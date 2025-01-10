import { useGetProductByIdQueries } from "@/api/productQueries";
import ProductPageSection from "@/sections/productpage/ProductPageSection";
import { useParams } from "react-router-dom";

const ProductsPageContainer = () => {
	const { id } = useParams();

	const { data, isLoading, error } = useGetProductByIdQueries(
		id || "not_found"
	);

	return (
		<ProductPageSection data={data} isLoading={isLoading} error={error} />
	);
};

export default ProductsPageContainer;
