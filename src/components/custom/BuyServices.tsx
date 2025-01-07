const BuyServices = () => {
	return (
		<div className="border border-black">
			<div className="flex items-center gap-4 py-6 px-4">
				<img
					src="/icons/delivery_car.svg"
					alt="delivery_car icon"
					className="h-10 w-10"
				/>
				<div>
					<h4 className="font-poppins">Free Delivery</h4>
					<p className="font-poppins text-sm">
						Enter your postal code for Delivery Availability
					</p>
				</div>
			</div>

			<hr className="w-full h-[2px] bg-black" />

			<div className="flex items-center gap-4 py-6 px-4">
				<img
					src="/icons/delivery_return_icon.svg"
					alt="delivery_car icon"
					className="h-10 w-10"
				/>
				<div>
					<h4 className="font-poppins">Return Delivery</h4>
					<p className="font-poppins text-sm">
						Free 30 Days Delivery Returns. Details
					</p>
				</div>
			</div>
		</div>
	);
};

export default BuyServices;
