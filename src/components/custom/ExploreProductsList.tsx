import { Product } from "@/types/ProductType";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";

interface IProductListProps {
	products: Product[];
	isLoading: boolean;
}

const ExploreProductsList: React.FC<IProductListProps> = ({
	products,
	isLoading,
}) => {
	if (isLoading) return <Loader />;
	return (
		<div className="flex flex-col items-center justify-between gap-10 md:flex-row md:flex-wrap">
			{products.length &&
				products.map((product) => (
					<Link to={`/product/${product.id}`}>
						<ProductCard
							key={product.id}
							id={product.id}
							discountPercentage={product.discountPercentage}
							price={product.price}
							thumbnail={product.thumbnail}
							title={product.title}
							isDiscount
						/>
					</Link>
				))}
		</div>
	);
};

export default ExploreProductsList;
