import { Product } from "@/types/ProductType";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { ApiError } from "@/types/ApiRequest";

interface IProductListProps {
	products?: Product[];
	isLoading: boolean;
	error?: ApiError | null;
}

const ExploreProductsList: React.FC<IProductListProps> = ({
	products,
	isLoading,
	error,
}) => {
	if (isLoading) return <Loader />;
	if (error) return <h1>{error.message}</h1>;
	return (
		<div className="grid grid-cols-6 gap-5">
			{products?.map((product) => (
				<Link to={`/product/${product._id}`} key={product._id}>
					<ProductCard
						id={product._id}
						discountPercent={product.discountPercent}
						price={product.price}
						thumbnail={product.thumbnail}
						title={product.name}
					/>
				</Link>
			))}
		</div>
	);
};

export default ExploreProductsList;
