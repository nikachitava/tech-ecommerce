import { Product } from "@/types/ProductType";
import ProductCard from "./ProductCard";

interface IProductListProps {
	products: Product[];
	isLoading: boolean;
}

const ProductList: React.FC<IProductListProps> = ({ products, isLoading }) => {
	if (isLoading) return <div>.....Loading</div>;
	return (
		<div className="flex items-center gap-10 overflow-auto no-scrollbar cursor-grab">
			{products.length &&
				products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						discountPercentage={product.discountPercentage}
						price={product.price}
						thumbnail={product.thumbnail}
						title={product.title}
						isDiscount
					/>
				))}
		</div>
	);
};

export default ProductList;
