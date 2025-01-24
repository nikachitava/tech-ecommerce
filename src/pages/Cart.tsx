import { useCart } from "@/states/cartStore";
import CartItemsSection from "@/sections/CartItemsSection";
import CustomButton from "@/components/custom/CustomButton";

const Cart = () => {
	const { cartCount, cartList, clearCart } = useCart((state) => state);

	if (cartCount === 0)
		return (
			<section className="min-h-screen flex items-center justify-center">
				<h1 className="font-poppins text-3xl text-red-600 font-semibold">
					Your cart is empty
				</h1>
			</section>
		);

	return (
		<section className="container min-h-screen">
			<div className="min-w-2xl max-w-screen-xl  mx-auto">
				<div className="my-20">
					<div
						className="flex items-center gap-4 cursor-pointer"
						onClick={() => clearCart()}
					>
						<img src="/icons/remove.svg" alt="remove_icon" />
						<h4 className="my-10 font-poppins text-xl text-red-600 cursor-pointer">
							Clear cart
						</h4>
					</div>
					<div className="grid grid-cols-4 mb-16">
						<h1 className="font-poppins text-left font-medium">
							Product
						</h1>
						<h1 className="font-poppins text-center font-medium">
							Price
						</h1>
						<h1 className="font-poppins text-center font-medium">
							Quantity
						</h1>
						<h1 className="font-poppins text-right font-medium">
							Subtotal
						</h1>
					</div>
					<CartItemsSection products={cartList} />
				</div>
			</div>
			<CustomButton
				filled
				title="Process to checkout"
				onClick={() => {}}
				otherStyles="px-12 py-4 text-white"
			/>
		</section>
	);
};

export default Cart;
