import React from "react";

interface CategoryCardProps {
	icon: string;
	title: string;
	number?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, number }) => {
	return (
		<div className="inline-flex flex-col items-center justify-center gap-6 py-6 px-14 border border-[#0000004D] hover:bg-secondary2  cursor-pointer group">
			<img
				src={icon}
				alt={icon}
				className="filter invert-0 brightness-0 group-hover:invert group-hover:brightness-0"
			/>
			{number && (
				<h1 className="font-poppins text-4xl font-bold text-text2 group-hover:text-text">
					{number}
				</h1>
			)}
			<h2 className="font-poppins text-text2 group-hover:text-text">
				{title}
			</h2>
		</div>
	);
};

export default CategoryCard;
