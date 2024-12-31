import LanguageSwitcher from "./LanguageSwitcher";

const Advertisement = () => {
	return (
		<div className="w-full bg-button">
			<div className="container flex flex-col lg:flex-row items-center ">
				<div className="flex flex-1 flex-col md:flex-row items-center justify-center py-4 gap-2">
					<p className="text-text text-[12px] md:text-sm font-poppins text-center">
						Summer Sale For All Swim Suits And Free Express Delivery
						- OFF 50%!
					</p>
					<strong className="font-semibold font-poppins text-text underline">
						ShopNow
					</strong>
				</div>
				<div>
					<LanguageSwitcher />
				</div>
			</div>
		</div>
	);
};

export default Advertisement;
