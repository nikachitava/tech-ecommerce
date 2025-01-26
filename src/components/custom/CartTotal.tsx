import CustomButton from "./CustomButton";

const CartTotal = () => {
	return (
		<div className="space-y-4 min-w-[300px] max-w-lg">
			<div className="flex items-center justify-between">
				<p>Subtotal</p>
				<p>$1750</p>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<p>Shpping</p>
				<p>Free</p>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<p>Total</p>
				<p>$1750</p>
			</div>
			<div className="text-right">
				<CustomButton
					filled={false}
					title="Proceed to Checkout"
					onClick={() => {}}
					otherStyles="px-6 py-2 text-black border border-black hover:text-white rounded-md"
				/>
			</div>
		</div>
	);
};

export default CartTotal;
