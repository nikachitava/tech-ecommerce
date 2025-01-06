const HeroSection = () => {
	return (
		<div className="flex flex-col-reverse items-center gap-2 md:flex-row md:gap-20 lg:justify-between">
			<div className="flex flex-col items-start py-36 space-y-10 break-words w-1/2">
				<h1 className="font-poppins font-medium text-text2 text-5xl">
					Our Story
				</h1>
				<div className="space-y-6">
					<p className="font-poppins text-text2">
						Launced in 2015, Exclusive is South Asia's premier
						online shopping makterplace with an active presense in
						Bangladesh. Supported by wide range of tailored
						marketing, data and service solutions, Exclusive has
						10,500 sallers and 300 brands and serves 3 millioons
						customers across the region.
					</p>
					<p className="font-poppins text-text2">
						Exclusive has more than 1 Million products to offer,
						growing at a very fast. Exclusive offers a diverse
						assotment in categories ranging from consumer.
					</p>
				</div>
			</div>
			<div>
				<img
					src="/images/about_page_main.svg"
					alt="about_hero_iamge"
					loading="lazy"
					className="w-full object-contain"
				/>
			</div>
		</div>
	);
};

export default HeroSection;
