import React from "react";

interface ICustomButton {
	title: string;
	onClick: () => void;
	filled: boolean;
	otherStyles?: string;
	textStyles?: string;
}

const CustomButton: React.FC<ICustomButton> = ({
	title,
	onClick,
	filled,
	otherStyles,
	textStyles,
}) => {
	return (
		<button
			className={`${otherStyles} ${
				filled ? "bg-secondary2" : "bg-transparent"
			} font-poppins cursor-pointer overflow-hidden relative group`}
			onClick={onClick}
		>
			{/* Background Animation */}
			<div className="absolute inset-0 bg-secondary2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></div>

			<span
				className={`relative z-10 group-hover:text-primary2 ${textStyles}`}
			>
				{title}
			</span>
		</button>
	);
};

export default CustomButton;
