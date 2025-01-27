import CustomButton from "./CustomButton";

interface ICartTotal {
	subtotal: string;
	shipping: string;
	total: string;
	onClick: () => void;
}

const CartTotal: React.FC<ICartTotal> = ({
	subtotal,
	shipping,
	total,
	onClick,
}) => {
	return (
		<div className="min-w-[300px] max-w-lg font-poppins">
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<p>Subtotal</p>
					<p>${subtotal}</p>
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<p>Shpping</p>
					<p>{shipping === "0" ? "Free" : shipping}</p>
				</div>
				<hr />
				<div className="flex items-center justify-between">
					<p>Total</p>
					<p>${total}</p>
				</div>
			</div>
			<div className="text-right mt-6">
				<CustomButton
					filled={false}
					title="Proceed to Checkout"
					onClick={onClick}
					otherStyles="px-6 py-2 text-black border border-black hover:text-white rounded-md"
				/>
			</div>
		</div>
	);
};

export default CartTotal;
