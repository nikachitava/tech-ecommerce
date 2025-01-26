import CartItem from "@/components/custom/CartItem";
import { useGetProductsByIdQueries } from "@/api/productQueries";
import { CartProductType } from "@/types/CartProductType";
import { useMemo } from "react";

interface ICartItemsSectionProps {
	products: CartProductType[];
}

const CartItemsSection: React.FC<ICartItemsSectionProps> = ({ products }) => {
	const memoizedProducts = useMemo(() => products, [products]);
	const { data, error } = useGetProductsByIdQueries(memoizedProducts);

	if (error) {
		return (
			<h1 className="font-poppins text-red-500 text-center">
				{error.message}
			</h1>
		);
	}

	return (
		<div className="space-y-8">
			{data?.map((item) => (
				<CartItem
					key={item._id}
					id={item._id}
					image={item.thumbnail}
					price={
						item.discountPercent
							? parseFloat(
									(
										item.price -
										(item.price * item.discountPercent) /
											100
									).toFixed(2)
							  )
							: item.price
					}
					title={item.name}
				/>
			))}
		</div>
	);
};

export default CartItemsSection;
