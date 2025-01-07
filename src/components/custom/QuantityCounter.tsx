import { useState } from "react";

const QuantityCounter = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => {
		if (count != 0) setCount(count - 1);
	};

	return (
		<div className="w-40 flex items-center justify-between border border-black">
			<div
				className="w-10 h-full flex items-center justify-center border-r border-black hover:bg-secondary2 hover:text-white cursor-pointer font-poppins font-medium"
				onClick={decrement}
			>
				-
			</div>
			<div className="font-poppins font-semibold text-lg">{count}</div>
			<div
				className="w-10 h-full flex items-center justify-center border-l border-black hover:bg-secondary2 hover:text-white cursor-pointer font-poppins font-medium"
				onClick={increment}
			>
				+
			</div>
		</div>
	);
};

export default QuantityCounter;
