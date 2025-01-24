import { useGetProductsByIdQueries } from "@/api/productQueries";
import CartItem from "@/components/custom/CartItem";
import { CartProductType } from "@/states/cartStore";

interface ICartItemsSectionProps {
	products: CartProductType[];
}

const CartItemsSection: React.FC<ICartItemsSectionProps> = ({ products }) => {
	const { data, error } = useGetProductsByIdQueries(products);

	if (error) return <h1>{error.message}</h1>;

	return (
		<div className="space-y-16">
			{data?.map((item) => (
				<CartItem
					key={item._id}
					id={item._id}
					image={item.thumbnail}
					price={item.price}
					title={item.name}
				/>
			))}
		</div>
	);
};

export default CartItemsSection;
