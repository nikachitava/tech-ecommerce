import { useCart } from "@/states/cartStore";
import CartItemsSection from "@/sections/CartItemsSection";
import CustomButton from "@/components/custom/CustomButton";
import CartTotal from "@/components/custom/CartTotal";

const Cart = () => {
	const { cartCount, cartList, clearCart, calculateTotalPrice } = useCart(
		(state) => state
	);

	if (cartCount === 0) {
		return (
			<section className="min-h-screen flex items-center justify-center">
				<h1 className="font-poppins text-3xl text-red-600 font-semibold">
					Your cart is empty
				</h1>
			</section>
		);
	}

	const summaryPrice = calculateTotalPrice();
	const shipping = 0;
	const totalPrice = summaryPrice + shipping;

	return (
		<section className="container min-h-screen">
			<div className="max-w-screen-xl mx-auto my-20">
				<div
					className="flex items-center gap-4 cursor-pointer"
					onClick={clearCart}
				>
					<img src="/icons/remove.svg" alt="Clear Cart" />
					<h4 className="font-poppins text-xl text-red-600">
						Clear cart
					</h4>
				</div>
				<div className="grid grid-cols-4 my-10 font-poppins">
					<h1 className="text-left font-medium">Product</h1>
					<h1 className="text-center font-medium">Price</h1>
					<h1 className="text-center font-medium">Quantity</h1>
					<h1 className="text-right font-medium">Subtotal</h1>
				</div>
				<CartItemsSection products={cartList} />
				<div className="my-10">
					<hr />
				</div>
				<div className="mt-16 flex justify-between">
					<div>
						<CustomButton
							filled
							title="Proceed to Checkout"
							onClick={() => {}}
							otherStyles="px-12 py-4 text-white"
						/>
					</div>
					<CartTotal
						subtotal={summaryPrice}
						shipping={shipping}
						total={totalPrice}
					/>
				</div>
			</div>
		</section>
	);
};

export default Cart;
