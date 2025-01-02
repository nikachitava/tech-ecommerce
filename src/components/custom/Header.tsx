import Timer from "./Timer";

interface HeaderProps {
	title: string;
	header: string;
	hasTimer?: boolean;
	targetDate?: Date;
}

const Header: React.FC<HeaderProps> = ({
	title,
	header,
	hasTimer = false,
	targetDate = new Date("2025-01-03T23:59:59"),
}) => {
	return (
		<div className="space-y-5">
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-4">
					<div className="bg-secondary2 w-5 h-10 rounded"></div>
					<h4 className="text-secondary2 font-semibold font-poppins">
						{title}
					</h4>
				</div>
				{hasTimer && <Timer targetDate={targetDate} />}
			</div>
			<h1 className="text-4xl font-poppins text-text2 font-semibold">
				{header}
			</h1>
		</div>
	);
};

export default Header;
