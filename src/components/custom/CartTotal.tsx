import CustomButton from "./CustomButton";

interface ICartTotal {
	subtotal: number;
	shipping: number;
	total: number;
}

const CartTotal: React.FC<ICartTotal> = ({ subtotal, shipping, total }) => {
	return (
		<div className="space-y-4 min-w-[300px] max-w-lg">
			<div className="flex items-center justify-between">
				<p>Subtotal</p>
				<p>${subtotal}</p>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<p>Shpping</p>
				<p>${shipping}</p>
			</div>
			<hr />
			<div className="flex items-center justify-between">
				<p>Total</p>
				<p>${total}</p>
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
