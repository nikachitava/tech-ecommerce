const BuyServices = () => {
	return (
		<div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
			<div className="flex items-start gap-4 group cursor-pointer transition-all duration-200 hover:bg-gray-50 p-4 rounded-lg">
				<div className="rounded-full bg-gray-100 p-3 group-hover:bg-white transition-colors duration-200">
					<img
						src="/icons/delivery_car.svg"
						alt="delivery_car icon"
						className="h-6 w-6"
					/>
				</div>
				<div>
					<h4 className="font-poppins font-medium mb-1">
						Free Delivery
					</h4>
					<p className="font-poppins text-sm text-gray-600">
						Enter your postal code for Delivery Availability
					</p>
				</div>
			</div>

			<div className="w-full h-px bg-gray-200" />

			<div className="flex items-start gap-4 group cursor-pointer transition-all duration-200 hover:bg-gray-50 p-4 rounded-lg">
				<div className="rounded-full bg-gray-100 p-3 group-hover:bg-white transition-colors duration-200">
					<img
						src="/icons/delivery_return_icon.svg"
						alt="return delivery icon"
						className="h-6 w-6"
					/>
				</div>
				<div>
					<h4 className="font-poppins font-medium mb-1">
						Return Delivery
					</h4>
					<p className="font-poppins text-sm text-gray-600">
						Free 30 Days Delivery Returns.{" "}
						<span className="text-black underline hover:text-gray-600 transition-colors">
							Details
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default BuyServices;
