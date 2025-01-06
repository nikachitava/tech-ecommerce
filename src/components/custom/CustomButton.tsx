interface ICustomButton {
	title: string;
	onClick: () => void;
	filled: boolean;
	otherStyles?: string;
}

const CustomButton: React.FC<ICustomButton> = ({
	title,
	onClick,
	filled,
	otherStyles,
}) => {
	return (
		<div
			className={`${otherStyles} ${
				filled && "bg-secondary2"
			} font-poppins cursor-pointer`}
			onClick={onClick}
		>
			{title}
		</div>
	);
};

export default CustomButton;
