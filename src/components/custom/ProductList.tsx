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

const ProductList: React.FC<IProductListProps> = ({
	products,
	isLoading,
	error,
}) => {
	if (isLoading) return <Loader />;
	if (error) return <h1>{error.message}</h1>;
	return (
		<div className="flex items-center gap-10 overflow-auto no-scrollbar cursor-grab">
			{products?.map((product) => (
				<Link to={`/product/${product._id}`} key={product._id}>
					<ProductCard
						id={product._id}
						price={product.price}
						discountPercentage={product.discountPercent}
						thumbnail={product.thumbnail}
						title={product.name}
					/>
				</Link>
			))}
		</div>
	);
};

export default ProductList;
