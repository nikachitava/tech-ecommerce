import React from "react";

interface INewArrivalsCardProps {
	image: string;
	title: string;
	description: string;
}

const NewArrivalsCard: React.FC<INewArrivalsCardProps> = ({
	image,
	title,
	description,
}) => {
	return (
		<div className="bg-[#0D0D0D] relative h-full rounded-lg px-8 pt-24 flex items-end justify-center">
			<img
				src={image}
				alt={image}
				loading="lazy"
				className="w-full  object-fill"
			/>
			<div className="absolute bottom-8 left-8 w-[255px]">
				<h1 className="font-poppins text-2xl font-semibold text-text">
					{title}
				</h1>
				<p className="font-poppins text-white text-sm mt-2 break-words">
					{description}
				</p>
				<p className="text-text underline font-semibold font-poppins mt-3 cursor-pointer">
					Shop Now
				</p>
			</div>
		</div>
	);
};

export default NewArrivalsCard;
