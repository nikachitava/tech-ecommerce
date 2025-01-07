import { Product } from "@/types/ProductType";
import React from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";

interface IProductListProps {
	products: Product[];
	isLoading: boolean;
}

const BestSellingProductsList: React.FC<IProductListProps> = ({
	products,
	isLoading,
}) => {
	if (isLoading) return <Loader />;
	return (
		<div className="flex items-center justify-between gap-10 overflow-auto no-scrollbar cursor-grab">
			{products.length &&
				products.map((product) => (
					<Link to={`/product/${product.id}`} key={product.id}>
						<ProductCard
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

export default BestSellingProductsList;
