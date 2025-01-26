import React, { useCallback } from "react";
import { useCart } from "@/states/cartStore";

interface QuantityCounterProps {
	productId: string;
	currentQuantity: number;
}

const QuantityCounter: React.FC<QuantityCounterProps> = React.memo(
	({ productId, currentQuantity }) => {
		const updateQuantity = useCart((state) => state.updateQuantity);

		const handleIncrement = useCallback(() => {
			updateQuantity(productId, currentQuantity + 1);
		}, [updateQuantity, productId, currentQuantity]);

		const handleDecrement = useCallback(() => {
			if (currentQuantity > 1) {
				updateQuantity(productId, currentQuantity - 1);
			}
		}, [updateQuantity, productId, currentQuantity]);

		return (
			<div className="w-40 flex items-center justify-between border border-black rounded-lg">
				<button
					className={`w-10 h-10 flex items-center justify-center border-r border-black font-poppins font-medium ${
						currentQuantity === 1
							? "cursor-not-allowed opacity-50"
							: "hover:bg-secondary2 hover:text-white"
					}`}
					onClick={handleDecrement}
					disabled={currentQuantity === 1}
					aria-label="Decrease quantity"
				>
					-
				</button>
				<div className="font-poppins font-semibold text-lg px-4 text-center">
					{currentQuantity}
				</div>
				<button
					className="w-10 h-10 flex items-center justify-center border-l border-black hover:bg-secondary2 hover:text-white cursor-pointer font-poppins font-medium"
					onClick={handleIncrement}
					aria-label="Increase quantity"
				>
					+
				</button>
			</div>
		);
	}
);

export default QuantityCounter;
